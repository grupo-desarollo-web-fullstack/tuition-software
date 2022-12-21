import config from "@config";
import serializeUser from "@utils/serializeUser";

const actionLogin = async (payload) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/estudiante/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  });
  const { data: user } = await response.json();
  return user;
};

export default async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const user = await actionLogin({
    email,
    password,
  });
  return serializeUser(user);
}
