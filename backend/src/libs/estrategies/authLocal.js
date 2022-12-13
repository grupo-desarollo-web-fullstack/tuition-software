import {
    getDataUniqueFromModel,
} from "../services/db.js";

import LocalStrategy from "passport-local";

const localStrategy = new LocalStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    const data = await getDataUniqueFromModel("estudiante", {
      where: {
        estudiante_email: email,
      },
    });
    const vericatedPassword = await bcrypt.compare(
      password,
      data.estudiante_password
    );
    if (vericatedPassword) {
      return done(null, data);
    }
  });

export default localStrategy;
