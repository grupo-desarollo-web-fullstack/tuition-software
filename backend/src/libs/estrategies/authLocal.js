import LocalStrategy from "passport-local";
import { getDataUniqueFromModel } from "../db.js";
import { unauthorized } from "@hapi/boom";
import bcrypt from "bcrypt";

const localStrategy = new LocalStrategy(
  { usernameField: "email" },
  async function (email, password, done) {
    try {
      const data = await getDataUniqueFromModel("estudiante", {
        where: {
          estudiante_email: email,
        },
      });
      if (!data) throw Error("Error en el correo o contraseña");
      const vericatedPassword = await bcrypt.compare(
        password,
        data.estudiante_password
      );
      if (!vericatedPassword) throw Error("Error en el correo o contraseña");
      if (vericatedPassword) return done(null, data);
    } catch (error) {
      const errorBoom = unauthorized(error.message);
      return done(errorBoom, null);
    }
  }
);

export default localStrategy;
