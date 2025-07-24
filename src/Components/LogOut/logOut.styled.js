import styled from "styled-components";

export const LogOutButton = styled.button`
  background-color: ${(p) => p.theme.colors.red};
  color: ${(p) => p.theme.colors.text};
  padding: 8px 16px;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.darkRed};
  }
`;