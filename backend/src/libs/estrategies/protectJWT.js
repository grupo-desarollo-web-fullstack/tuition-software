import { unauthorized } from "@hapi/boom";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { getDataUniqueFromModel } from "../db.js";

//Validacion del token
const jwtStrategy = (options) =>
  new JwtStrategy(
    {
      ...options,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret",
    },
    async (payload, done) => {
      try {
        const data = await getDataUniqueFromModel("estudiante", {
          where: {
            estudiante_id: payload.id,
          },
        });
        return done(null, data);
      } catch (error) {
        const errorBoom = unauthorized(error.message);
        done(errorBoom, null);
      }
    }
  );

export default jwtStrategy;
