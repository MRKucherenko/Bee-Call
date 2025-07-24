import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 250ms ease;

  &.active {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
  }

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const LogoutWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;