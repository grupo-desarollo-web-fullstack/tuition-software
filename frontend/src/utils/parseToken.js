/**
 * @typedef UserPayload
 * @property {Number} id
 * @property {Number} exp
 * @property {Number} iat
 */

/**
 *
 * @param {String} token
 * @returns {UserPayload}
 */
export default function parseToken(token) {
  const [, payload] = token.split(".");
  const jsonPayload = JSON.parse(window.atob(payload));
  return jsonPayload;
}
