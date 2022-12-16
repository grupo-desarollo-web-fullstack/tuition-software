import config from "../../config";

const actionLogin = async (payload) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  // headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/estudiante`, {
    method: "POST",
    body: payload,
    headers,
  });
  const user = await response.json();
  return {
    user,
  };
};

export default async function login(formData) {
  const user = await actionLogin(formData);
  return user;
}
