import config from "../../config";

const actionRegister = async (payload) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/estudiante`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  });
  const user = await response.json();
  return {
    user,
  };
};

export default async function register(formData) {
  const name = formData.get("name");
  const password = formData.get("password");
  const career = formData.get("career");
  const cycle = formData.get("cycle");
  const user = await actionRegister({
    nombre: name,
    carrera: career,
    ciclo: cycle,
    password,
  });
  return user;
}
