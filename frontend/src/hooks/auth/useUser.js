import config from "@config";
import useLocalStorage from "@hooks/useLocalStorage";
import getUser from "@libs/auth/getUser";
import stateUser from "@libs/states/user";
import { useEffect, useSyncExternalStore } from "react";

/**
 * @typedef User
 * @property {number} id
 * @property {string} nombre
 * @property {string} email
 * @property {string} carrera
 * @property {string} foto
 * @property {number} ciclo
 */

/**
 *
 * @returns {[User, (user: User?) => void]}
 */
export default function useUser(isSuscribe = true) {
  const user = useSyncExternalStore(
    stateUser.suscribe.bind(stateUser, isSuscribe),
    stateUser.getSnapshot.bind(stateUser),
  );
  const [token, , { initial }] = useLocalStorage(
    config.tokenTuitionSoftware,
    undefined,
    isSuscribe,
  );
  const updateUser = async (userPreGetted) => {
    if (typeof userPreGetted !== "undefined") {
      stateUser.user = userPreGetted;
      return;
    }
    const userGetted = await getUser(token);
    stateUser.user = userGetted;
  };
  useEffect(() => {
    if (!token && !initial) updateUser(null);
  }, [token]);
  return [user, updateUser];
}
