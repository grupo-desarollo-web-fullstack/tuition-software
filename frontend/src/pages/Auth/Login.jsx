import { Form, Link, useActionData } from "react-router-dom";
import login from "../../libs/auth/login";
import "../../styles/modules/form.scss";

export const actionLogin = async ({ request }) => {
  const formData = await request.formData();
  const user = await login(formData);
  return user;
};

const Login = () => {
  const user = useActionData();
  if (user) console.log(user);
  return (
    <div className="form-container">
      <Form className="form" method="post" action="/auth/login">
        <div className="form-container">
          <input placeholder="Correo" required name="email" type="email" />
          <input
            placeholder="Contraseña"
            required
            name="password"
            type="text"
          />
          <button>Iniciar Sesión</button>
        </div>
      </Form>
      <Link to="../register">No tengo cuenta, quiero registrarme.</Link>
    </div>
  );
};

export default Login;
