import config from "@config";
import serialize from "@utils/serialize";

const actionLogin = async (payload) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/estudiante/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  });
  const { data: user, message, error } = await response.json();
  const dataGetted = {
    user,
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

export default async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const { user, status, error } = await actionLogin({
    email,
    password,
  });
  return {
    user: serialize(user, "estudiante"),
    status,
    error,
  };
}
