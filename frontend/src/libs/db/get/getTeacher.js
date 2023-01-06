import config from "@config/index";
import serialize from "@utils/serialize";

export default async function getTeacher(teacherId) {
  if (!teacherId) return;
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/docente/${teacherId}`, {
    method: "GET",
    headers,
  });
  const { data } = await response.json();
  return serialize(data, "docente");
}
