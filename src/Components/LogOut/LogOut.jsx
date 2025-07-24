import { useDispatch } from "react-redux"
import { logOut } from "../../redux/auth/authOperations";
import * as CS from './logOut.styled'

export const LogOut = () => {
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logOut());
  }
  return(
    <CS.LogOutButton type="button" onClick={handelLogout}>Logout</CS.LogOutButton>
  )
}