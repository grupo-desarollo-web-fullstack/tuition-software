import LocalStrategy from "passport-local";
import { getDataUniqueFromModel } from "../db.js";
import bcrypt from "bcrypt"

const localStrategy = new LocalStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    try {
      const data = await getDataUniqueFromModel("estudiante", {
        where: {
          estudiante_email: email,
        },
      });
      const vericatedPassword = await bcrypt.compare(
        password,
        data.estudiante_password
        );
        console.log(vericatedPassword)
      if (vericatedPassword) {
        return done(null, data);
      }
    } catch (error) {
      console.log(error)
      const errorBoom = unauthorized(error.message)
      return done(errorBoom, null)
    }
  });

export default localStrategy;
