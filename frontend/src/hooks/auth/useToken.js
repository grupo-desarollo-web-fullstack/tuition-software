import { useEffect } from "react";
import config from "@config/index";
import useLocalStorage from "@hooks/useLocalStorage";
import useUser from "./useUser";

export default function useToken() {
  const [token, setToken, aditionals] = useLocalStorage(
    config.tokenTuitionSoftware,
    undefined
  );
  const { initial, removeValue: removeToken } = aditionals;
  const [user, setUser] = useUser();
  useEffect(() => {
    if (!token && !initial && user) setUser(null);
  }, [token]);
  return [token, setToken, removeToken];
}
