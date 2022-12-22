import { useEffect, useState } from "react";
import { json, Link, useFetcher, useOutletContext } from "react-router-dom";
import Button from "@components/Button";
import register from "@libs/auth/register";
import ErrorForm from "@components/errors/ErrorForm";
import { MdEmail, MdLibraryBooks, MdPerson, MdVpnKey } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import InputPassword from "@components/InputPassword";

export const actionRegister = async ({ request }) => {
  const formData = await request.formData();
  const { user, status, error } = await register(formData);
  return json(
    {
      user: user,
      error: error,
    },
    {
      status,
    }
  );
};

const Register = () => {
  const { setToken, setUser } = useOutletContext();
  const [error, setError] = useState(null);
  const fetcher = useFetcher();
  useEffect(() => {
    if (fetcher.data) {
      const { error: err, user } = fetcher.data;
      if (err) {
        setError(err);
        return;
      }
      if (user) {
        setUser(user);
        setToken(user.token);
      }
    }
  }, [fetcher.data]);
  return (
    <div className="auth__content">
      <h2 className="auth__title fadeInDown">Registrarse</h2>
      <fetcher.Form className="form" method="post" action="/auth/register">
        <div className="form-container form-container--register">
          <label
            htmlFor="name"
            className="form__label form__label--register fadeInLeft"
          >
            <MdPerson color="#2C3333" />
            <input
              className="form__input"
              placeholder="Nombre Completo"
              id="name"
              required
              name="name"
              type="text"
            />
          </label>
          <label
            htmlFor="email"
            className="form__label form__label--register fadeInLeft"
          >
            <MdEmail color="#2C3333" />
            <input
              id="email"
              className="form__input"
              placeholder="Correo"
              required
              name="email"
              type="email"
            />
          </label>
          <InputPassword className="form__label--register" />
          <label
            htmlFor="career"
            className="form__label form__label--register fadeInLeft"
          >
            <FaUniversity color="#2C3333" />
            <input
              className="form__input"
              placeholder="Carrera"
              required
              id="career"
              name="career"
              type="text"
            />
          </label>
          <label
            htmlFor="cycle"
            className="form__label form__label--register fadeInLeft"
          >
            <MdLibraryBooks color="#2C3333" />
            <input
              className="form__input"
              placeholder="Ciclo"
              required
              id="cycle"
              name="cycle"
              type="number"
            />
          </label>

          {error ? (
            <ErrorForm className="error--register" error={error} />
          ) : (
            <></>
          )}
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
