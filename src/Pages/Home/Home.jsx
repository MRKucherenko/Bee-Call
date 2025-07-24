
import { useAuth } from "../../Components/Hooks/hooks";
import * as CS from "./home.styled";

export const Home = () => {
  const { isLogin } = useAuth();
  return (
    <CS.Wrapper>
      <CS.Title>Welcome to Your Phone Book</CS.Title>
      <CS.Text>
        Safely store, manage and edit your contacts all in one place. Fast, secure, and always at your fingertips.
      </CS.Text>
      {!isLogin ? (
        <CS.StyledLink to="/register">Get Started</CS.StyledLink>
      ) : (
        <CS.StyledLink to="/phoneBook">Go to Contacts</CS.StyledLink>
      )}
    </CS.Wrapper>
  );
  
}