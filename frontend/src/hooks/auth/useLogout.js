import { useNavigate } from "react-router-dom";
import useToken from "./useToken";
import useUser from "./useUser";

export default function useLogout(to) {
  const [, , removeToken] = useToken();
  const [, setUser] = useUser();
  const navigate = useNavigate();
  const logout = (toAfterLogout) => {
    removeToken();
    setUser(null);
    if ((typeof toAfterLogout === "string" && toAfterLogout) || to) {
      navigate(to || toAfterLogout);
    }
  };
  return logout;
}
