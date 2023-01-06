import config from "@config/index";
import stateUser from "@libs/states/user";
import { redirect } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
export const loaderLogout = () => {
  if (!stateUser.user) return redirect("/auth/login");
  stateUser.user = null;
  localStorage.removeItem(config.tokenTuitionSoftware);
  return redirect("/");
};
