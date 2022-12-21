import config from "@config";
import serializeUser from "@utils/serializeUser";

const cache = {
  token: "",
  user: null,
};

export default async function getUser(token) {
  if (cache.token === token) return cache.user;
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(`${baseUrlBackend}/estudiante/info`, {
    method: "GET",
    headers,
  });
  const { data: user } = await response.json();
  const userSerialized = serializeUser(user);
  cache.token = token;
  cache.user = userSerialized;
  return userSerialized;
}
