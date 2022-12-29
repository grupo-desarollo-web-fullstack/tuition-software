import config from "@config";
import parseToken from "@utils/parseToken";
import serialize from "@utils/serialize";

const cache = {
  token: "",
  user: null,
};

export default async function getUser(token) {
  if (cache.token === token) return cache.user;
  const tokenParsed = parseToken(token);
  const { baseUrlBackend } = config;
  if (tokenParsed.exp < new Date() / 1000) return null;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(
    `${baseUrlBackend}/estudiante/${tokenParsed.id}`,
    {
      method: "GET",
      headers,
    }
  );
  const { data: user } = await response.json();
  const userSerialized = serialize(user, "estudiante");
  cache.token = token;
  cache.user = userSerialized;
  return userSerialized;
}
