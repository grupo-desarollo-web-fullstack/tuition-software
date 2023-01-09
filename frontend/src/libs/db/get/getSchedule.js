import config from "@config/index";
import serialize from "@utils/serialize";
import { DateTime } from "luxon";
import getTeacher from "./getTeacher";

export default async function getSchedule(scheduleId) {
  if (!scheduleId) return;
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/horario/${scheduleId}`, {
    method: "GET",
    headers,
  });
  const { data } = await response.json();
  if (data) {
    const teacher = await getTeacher(data.tbl_docente_docente_id);
    data.teacher = teacher;
    const start = DateTime.fromISO(data.horario_hora_inicio);
    const end = DateTime.fromISO(data.horario_hora_final);
    data.date = {
      start,
      end,
    };
  }
  return serialize(data, "horario");
}
