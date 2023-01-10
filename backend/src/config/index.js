import { config as configDotenv } from "dotenv";

configDotenv();

const config = {
  //Puerto
  port: process.env.PORT || 5000,
  //Clave secreta
  secretOrKey: process.env.SECRET_OR_KEY,
  //Codigo de seguridad
  tokenUserTest: process.env.TOKEN_USER_TEST,
};

export default config;
