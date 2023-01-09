import config from "@config/index";
import serialize from "@utils/serialize";
import getSchedule from "./getSchedule";

export default async function getLessons(cursoId, options = {}) {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  const searchParams = new URLSearchParams();
  headers.set("Content-Type", "application/json; charset=utf-8");
  if (cursoId) searchParams.append("cursoId", cursoId);
  options.orderByRelation?.forEach((value, i) =>
    searchParams.append(`orderByRelation[${i}]`, value)
  );
  if (options.filter?.userId) {
    const { userId } = options.filter;
    searchParams.append("userId", userId);
  }
  const response = await fetch(
    `${baseUrlBackend}/clase?${searchParams.toString()}`,
    {
      method: "GET",
      headers,
    }
  );
  const { data } = await response.json();
  const lessons = await Promise.all(
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
  return lessons;
}
