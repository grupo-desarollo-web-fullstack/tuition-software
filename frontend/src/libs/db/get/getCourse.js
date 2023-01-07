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
const getCourse = async (token, idCourse, options = {}) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const urlSearchParams = new URLSearchParams();
  if (token) {
    const tokenParsed = parseToken(token);
    if (tokenParsed.exp < new Date() / 1000) return null;
    if (options.filterByUser) urlSearchParams.append("userId", tokenParsed.id);
    headers.set("Authorization", `Bearer ${token}`);
    if (options.action) urlSearchParams.append("action", options.action);
  }
  const response = await fetch(
    `${baseUrlBackend}/curso/${idCourse}${
      urlSearchParams.toString() ? `?${urlSearchParams.toString()}` : ""
    }`.trimEnd(),
    {
      method: "GET",
      headers,
    }
  );
  const { data: course } = await response.json();
  return serialize(course, "curso");
};

export default getCourse;
