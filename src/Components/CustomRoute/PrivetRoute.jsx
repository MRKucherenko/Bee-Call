import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/hooks"

export const PrivetRoute = ({reDirectTo, component}) => {
  const {isLogin, isCurentUser, token} = useAuth()
  const shoudeReDirect = !isLogin && !isCurentUser && !token;
  return (
    shoudeReDirect? <Navigate to={reDirectTo} replace /> :component
  )
}