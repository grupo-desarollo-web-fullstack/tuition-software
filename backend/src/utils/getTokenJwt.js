import jwt from "jsonwebtoken";

const getTokenJwt = (data, options) =>
  jwt.sign(
    {
      id: data.estudiante_id,
    },
    options.secretOrKey,
    {
      expiresIn: "3h",
    }
  );

export default getTokenJwt;
