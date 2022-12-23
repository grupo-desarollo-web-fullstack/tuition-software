import config from "@config";
import useLocalStorage from "@hooks/useLocalStorage";
import getUser from "@libs/auth/getUser";
import stateUser from "@libs/states/user";
import { useSyncExternalStore } from "react";

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
export default function useUser() {
  const user = useSyncExternalStore(
    stateUser.suscribe.bind(stateUser),
    stateUser.getSnapshot.bind(stateUser)
  );
  const [token] = useLocalStorage(config.tokenTuitionSoftware, undefined);
  const updateUser = async (userPreGetted) => {
    if (typeof userPreGetted !== "undefined") {
      stateUser.user = userPreGetted;
      return;
    }
    const userGetted = await getUser(token);
    stateUser.user = userGetted;
  };
  return [user, updateUser];
}
