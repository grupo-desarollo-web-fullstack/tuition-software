import { useEffect } from "react";
import { Link, useFetcher, useOutletContext } from "react-router-dom";
import Button from "@components/Button";
import useUser from "@hooks/auth/useUser";
import login from "@libs/auth/login";
import "@styles/modules/form.scss";

export const actionLogin = async ({ request }) => {
  const formData = await request.formData();
  const user = await login(formData);
  return user;
};

const Login = () => {
  const [, setUser] = useUser();
  const { setToken } = useOutletContext();
  const fetcher = useFetcher();
  useEffect(() => {
    const { data: user } = fetcher;
    if (user) {
      setUser(user);
      setToken(user.token);
    }
  }, [fetcher.data]);
  return (
    <div className="auth__content">
      <h2 className="auth__title fadeInDown">Iniciar sesión</h2>
      <fetcher.Form className="form" method="post" action="/auth/login">
        <div className="form-container">
          <input
            className="form__input fadeInLeft"
            placeholder="Correo"
            required
            name="email"
            type="email"
          />
          <input
            className="form__input fadeInLeft"
            placeholder="Contraseña"
            required
            name="password"
            type="password"
          />
          <Button fetcher={fetcher} type="dark">
            ¡Entrar!
          </Button>
        </div>
      </fetcher.Form>
      <Link className="auth__link" to="../register">
        No tengo cuenta, quiero registrarme.
      </Link>
    </div>
  );
};

export default Login;
