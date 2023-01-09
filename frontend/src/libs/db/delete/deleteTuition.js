import config from "@config";
import parseToken from "@utils/parseToken";
import { redirect } from "react-router-dom";
// import serialize from "@utils/serialize";

const actionDeleteTuition = async (token, tuitionId) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(`${baseUrlBackend}/matricula/${tuitionId}`, {
    method: "DELETE",
    headers,
  });
  const { data: tuition, message, error } = await response.json();
  const dataGetted = {
    tuition,
    status: response.status,
  };
  if (error) {
    dataGetted.error = {
      error,
      message,
    };
  }
  return dataGetted;
};

export default async function deleteTuition(token, tuitionId) {
  const tokenParsed = parseToken(token);
  if (tokenParsed.exp < new Date() / 1000) return redirect("/auth/login");
  const tuitionRemoved = await actionDeleteTuition(token, tuitionId);
  return tuitionRemoved;
}
