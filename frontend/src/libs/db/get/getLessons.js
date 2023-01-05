import config from "@config/index";
import serialize from "@utils/serialize";
import getSchedule from "./getSchedule";

export default async function getLessons(cursoId, options) {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/clase?cursoId=${cursoId}`, {
    method: "GET",
    headers,
  });
  const { data } = await response.json();
  let lessons = await Promise.all(
    data
      .map((lesson) => serialize(lesson, "clase"))
      .map(async (lesson) => {
        const schedule = await getSchedule(lesson.tbl_horario_horario_id);
        return {
          ...lesson,
          schedule,
        };
      })
  );
  if (options.sort && options.sort === "schedule") {
    lessons = lessons?.sort(
      ({ schedule: scheduleA }, { schedule: scheduleB }) => {
        const { date: dateA } = scheduleA;
        const { date: dateB } = scheduleB;
        return dateA.hour - dateB.hour;
      }
    );
  }
  return lessons;
}
