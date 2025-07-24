import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.section`
  padding: 80px 20px;
  text-align: center;
  color: ${(p) => p.theme.colors.text};
`;

export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.l}px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${(p) => p.theme.colors.primary};
  color: white;
  border-radius: ${(p) => p.theme.radii.normal};
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;