import config from "@config/index";
import parseToken from "@utils/parseToken";

const cache = {
  token: "",
  matriculas: null,
};

const getMatriculas = async (token) => {
  if (cache.token === token) return cache.matriculas;
  const tokenParsed = parseToken(token);
  const { baseUrlBackend } = config;
  if (tokenParsed.exp < new Date() / 1000) return null;
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(
    `${baseUrlBackend}/matricula?userId=${tokenParsed.id}`,
    {
      method: "GET",
      headers,
    }
  );
  const { data: matriculas } = await response.json();
  cache.token = token;
  cache.matriculas = matriculas;
  return matriculas;
};

export default getMatriculas;
