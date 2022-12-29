import config from "@config";
import serialize from "@utils/serialize";

const actionRegister = async (payload) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/estudiante`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  });
  const { data: user, message, error } = await response.json();
  const dataGetted = {
    user,
    status: response.status,
  };
  if (error)
    dataGetted.error = {
      error,
      message,
    };
  return dataGetted;
};

export default async function register(formData) {
  const name = formData.get("name");
  const password = formData.get("password");
  const career = formData.get("career");
  const cycle = formData.get("cycle");
  const email = formData.get("email");
  const { user, status, error } = await actionRegister({
    nombre: name,
    carrera: career,
    ciclo: cycle,
    password,
    email,
  });
  return {
    user: serialize(user, "estudiante"),
    status,
    error,
  };
}
