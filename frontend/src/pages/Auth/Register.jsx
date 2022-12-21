import { useEffect } from "react";
import { Link, useFetcher, useOutletContext } from "react-router-dom";
import Button from "@components/Button";
import register from "@libs/auth/register";

export const actionRegister = async ({ request }) => {
  const formData = await request.formData();
  const user = await register(formData);
  return user;
};

const Register = () => {
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
      <h2 className="auth__title fadeInDown">Registrarse</h2>
      <fetcher.Form className="form" method="post" action="/auth/register">
        <div className="form-container form-container--register">
          <input
            className="form__input form__input--register fadeInLeft"
            placeholder="Nombre Completo"
            required
            name="name"
            type="text"
          />
          <input
            className="form__input form__input--register fadeInLeft"
            placeholder="Correo"
            required
            name="email"
            type="email"
          />
          <input
            className="form__input form__input--register fadeInLeft"
            placeholder="Contraseña"
            required
            name="password"
            type="password"
          />
          <input
            className="form__input form__input--register fadeInLeft"
            placeholder="Carrera"
            required
            name="career"
            type="text"
          />
          <input
            className="form__input form__input--register fadeInLeft"
            placeholder="Ciclo"
            required
            name="cycle"
            type="number"
          />
          <Button fetcher={fetcher} type={["dark", "form"]}>
            ¡Registrarme!
          </Button>
        </div>
      </fetcher.Form>
      <Link className="auth__link" to="../login">
        Tengo cuenta, quiero iniciar sesión.
      </Link>
    </div>
  );
};

export default Register;
