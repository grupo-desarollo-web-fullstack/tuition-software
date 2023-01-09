import { useEffect, useState } from "react";
import { json, Link, useFetcher, useOutletContext } from "react-router-dom";
import Button from "@components/Button";
import login from "@libs/auth/login";
import "@styles/modules/form.scss";
import ErrorForm from "@components/errors/ErrorForm";
import { MdEmail } from "react-icons/md";
import InputPassword from "@components/InputPassword";
import { AnimatePresence } from "framer-motion";

export const actionLogin = async ({ request }) => {
  const formData = await request.formData();
  const { user, status, error } = await login(formData);
  return json(
    {
      user,
      error,
    },
    {
      status,
    }
  );
};

const Login = () => {
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
    <section className="auth__content">
      <h2 className="auth__title fadeInDown">Iniciar sesión</h2>
      <fetcher.Form className="form" method="post" action="/auth/login">
        <div className="form-container">
          <label htmlFor="email" className="form__label fadeInLeft">
            <MdEmail color="#2C3333" />
            <input
              className="form__input"
              placeholder="Correo"
              required
              id="email"
              name="email"
              type="email"
            />
          </label>
          <InputPassword />
          <AnimatePresence>
            {error && <ErrorForm className="error--form" error={error} />}
          </AnimatePresence>
          <Button fetcher={fetcher} modifiers="dark">
            ¡Entrar!
          </Button>
        </div>
      </fetcher.Form>
      <Link className="auth__link" to="../register">
        No tengo cuenta, quiero registrarme.
      </Link>
    </section>
  );
};

export default Login;
