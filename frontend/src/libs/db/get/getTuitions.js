import config from "@config/index";
import parseToken from "@utils/parseToken";

const getTuitions = async (
  token,
  options = {
    orderBy: "matricula_id",
  }
) => {
  const tokenParsed = parseToken(token);
  const { baseUrlBackend } = config;
  if (tokenParsed.exp < new Date() / 1000) return null;
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Content-Type", "application/json; charset=utf-8");
  const searchParams = new URLSearchParams();
  searchParams.append("userId", tokenParsed.id);
  if (options.orderBy) searchParams.append("orderBy", options.orderBy);
  const response = await fetch(
    `${baseUrlBackend}/matricula?${searchParams.toString()}`,
    {
      method: "GET",
      headers,
    }
  );
  const { data: matriculas } = await response.json();
  return matriculas;
};

export default getTuitions;
