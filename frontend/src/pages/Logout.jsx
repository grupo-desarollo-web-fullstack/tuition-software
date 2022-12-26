import config from "@config/index";
import stateUser from "@libs/states/user";
import { redirect } from "react-router-dom";

export const loaderLogout = () => {
  if (!stateUser.user) return redirect("/auth/login");
  stateUser.user = null;
  localStorage.removeItem(config.tokenTuitionSoftware);
  return redirect("/");
};
