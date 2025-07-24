import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: ${(p) => p.theme.shadows.boxShadow};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonAdd = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  background-color: ${(p) => p.theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  cursor: pointer;
  font-weight: 600;
  box-shadow: ${(p) => p.theme.shadows.buttonsShadow};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.accentDark};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;