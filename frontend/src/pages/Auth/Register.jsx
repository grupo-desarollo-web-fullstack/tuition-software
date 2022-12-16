import { Form, Link, useActionData } from "react-router-dom";
import register from "../../libs/auth/register";

export const actionRegister = async ({ request }) => {
  const formData = await request.formData();
  const user = await register(formData);
  return user;
};

const Register = () => {
  const user = useActionData();
  if (user) console.log(user);
  return (
    <div className="auth-container">
      <Form className="form" method="post" action="/auth/register">
        <div className="form-container">
          <input
            className="form__input"
            placeholder="Name"
            required
            name="name"
            type="text"
          />
          <input
            className="form__input"
            placeholder="Correo"
            required
            name="email"
            type="email"
          />
          <input
            className="form__input"
            placeholder="Contraseña"
            required
            name="password"
            type="text"
          />
          <input
            className="form__input"
            placeholder="Carrera"
            required
            name="career"
            type="text"
          />
          <input
            className="form__input"
            placeholder="Ciclo"
            required
            name="cycle"
            type="number"
          />
          <button>Iniciar Sesión</button>
        </div>
      </Form>
      <Link to="../login">Tengo cuenta, quiero iniciar sesión.</Link>
    </div>
  );
};

export default Register;
