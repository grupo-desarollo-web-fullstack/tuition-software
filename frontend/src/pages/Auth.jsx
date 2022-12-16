import { Outlet, useMatch } from "react-router-dom";
import "../styles/modules/auth.scss";

const Auth = () => {
  const isLogin = useMatch("/auth/login");
  return (
    <main className="main">
      <section className="auth">
        <h2 className="auth__title">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h2>
        <Outlet />
      </section>
    </main>
  );
};

export default Auth;
