import { config as configDotenv } from "dotenv";

configDotenv();

const config = {
  port: process.env.PORT || 5000,
  secretOrKey: process.env.SECRET_OR_KEY,
  tokenUserTest:process.env.TOKEN_USER_TEST,
};

export default config;
