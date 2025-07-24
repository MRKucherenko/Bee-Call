import { useSelector } from "react-redux";
import { 
  selectIsLogin, 
  selectIsCurentUser, 
  selectToken, 
  selectUser 
} from "../../redux/auth/authSelector";

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const isCurentUser = useSelector(selectIsCurentUser);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return{
    isLogin,
    isCurentUser,
    token,
    user
  }
}