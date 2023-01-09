import config from "@config";
import parseToken from "@utils/parseToken";
// import serialize from "@utils/serialize";

const actionCreateTuition = async (token, payload) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(`${baseUrlBackend}/matricula`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  });
  const { data: tuition, message, error } = await response.json();
  const dataGetted = {
    tuition,
    status: response.status,
  };
  if (error) {
    dataGetted.error = {
      error,
      message,
    };
  }
  return dataGetted;
};

export default async function createTuitions(token, ...lessonsIds) {
  const tokenParsed = parseToken(token);
  if (tokenParsed.exp < new Date() / 1000) return null;
  const tuitions = await Promise.all(
    lessonsIds.map(async (lessonId) => {
      const tuition = await actionCreateTuition(token, {
        estudiante_id: tokenParsed.id,
        clase_id: lessonId,
      });
      return tuition;
    })
  );
  return tuitions;
}
