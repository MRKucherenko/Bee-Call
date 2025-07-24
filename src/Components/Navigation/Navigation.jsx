import { useAuth } from "../Hooks/hooks";
import { LogOut } from "../LogOut/LogOut";
import * as CS from './navigation.styled'

export const Navigation = () => {
  const { isLogin } = useAuth();

  return (
    <CS.NavList>
      <CS.NavItem>
        <CS.StyledNavLink to="/">Home</CS.StyledNavLink>
      </CS.NavItem>
      {isLogin && (
        <CS.NavItem>
          <CS.StyledNavLink to="/phoneBook">Phone Book</CS.StyledNavLink>
        </CS.NavItem>
      )}
      {isLogin && (
        <CS.NavItem>
          <CS.StyledNavLink to="/cabinet">Cabinet</CS.StyledNavLink>
        </CS.NavItem>
      )}
      {!isLogin && (
        <CS.NavItem>
          <CS.StyledNavLink to="/register">Register</CS.StyledNavLink>
        </CS.NavItem>
      )}
      {!isLogin && (
        <CS.NavItem>
          <CS.StyledNavLink to="/login">Login</CS.StyledNavLink>
        </CS.NavItem>
      )}
      {isLogin && (
        <CS.NavItem>
          <CS.LogoutWrap>
            <LogOut />
          </CS.LogoutWrap>
        </CS.NavItem>
      )}
    </CS.NavList>
  );
};
