import { useEffect } from "react";
import {
  Outlet, redirect, useMatch, useNavigate,
} from "react-router-dom";
import LoginSvg from "@components/LoginSvg";
import RegisterSvg from "@components/RegisterSvg";
import useToken from "@hooks/auth/useToken";
import stateUser from "@libs/states/user";
import "@styles/modules/auth.scss";
import useUser from "@hooks/auth/useUser";
import { AnimatePresence } from "framer-motion";

export const loaderAuth = () => {
  if (stateUser.user) return redirect("/dashboard");
  return null;
};

const Auth = () => {
  const isLogin = useMatch("/auth/login");
  const [token, setToken] = useToken();
  const [, setUser] = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token]);
  return (
    <main className="main main--auth">
      <section className="auth">
        <div className="auth-container">
          <aside className="auth__aside">
            <AnimatePresence>
              {isLogin ? (
                <LoginSvg
                  initial={{ transform: "scale(0.95)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(0.95)" }}
                  className="auth__aside__img "
                />
              ) : (
                <RegisterSvg
                  initial={{ transform: "scale(0.95)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(0.95)" }}
                  className="auth__aside__img auth__aside__img--register "
                />
              )}
            </AnimatePresence>
            <p className="auth__aside__paragraph">
              {isLogin
                ? "Inicia sesión, ve las novedades en tus cursos!"
                : "Registrate, obtén control de tus cursos, explora, matrículate, ahorra tiempo"}
            </p>
          </aside>
          <Outlet
            context={{
              setToken,
              setUser,
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default Auth;
