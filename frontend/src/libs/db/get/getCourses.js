import config from "@config/index";
import parseToken from "@utils/parseToken";
import serialize from "@utils/serialize";

/**
 * @typedef {"obligatorio"} OBLIGATORIO_TYPE
 */
/**
 * @typedef {"opcional"} OPCIONAL_TYPE
 */

/**
 *
 * @typedef Course
 * @property {number} ciclo
 * @property {number} creditos
 * @property {number} id
 * @property {string} nombre
 * @property {OBLIGATORIO_TYPE | OPCIONAL_TYPE} tipo
 */

/**
 * @param {String} [token]
 * @param {{
 *  filterByUser: Boolean
 *  action: String
 * }} options
 */
const getCourses = async (token, options = {}) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  let stringUrlSearchParams = "";
  if (token) {
    const tokenParsed = parseToken(token);
    if (tokenParsed.exp < new Date() / 1000) return null;

    const urlSearchParams = new URLSearchParams();
    if (options.filterByUser) urlSearchParams.append("userId", tokenParsed.id);
    headers.set("Authorization", `Bearer ${token}`);
    if (options.action) urlSearchParams.append("action", options.action);
    stringUrlSearchParams = urlSearchParams.toString();
  }
  const response = await fetch(
    `${baseUrlBackend}/curso${
      stringUrlSearchParams ? `?${stringUrlSearchParams}` : ""
    }`.trimEnd(),
    {
      method: "GET",
      headers,
    }
  );
  const { data: courses } = await response.json();
  return courses?.map((course) => serialize(course, "curso"));
};

export default getCourses;
