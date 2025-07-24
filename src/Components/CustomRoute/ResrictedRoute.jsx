import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/hooks";

export const RestrictedRoute = ({ reDirectTo, component }) => {
  const { isLogin } = useAuth();
  console.log("isLogin", isLogin);

  return isLogin ? <Navigate to={reDirectTo} replace /> : component;
};
