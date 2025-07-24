import styled from "styled-components";

export const Form = styled.form`
  background-color: ${(p) => p.theme.colors.cardBackground};
  padding: 32px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: ${(p) => p.theme.shadows.boxShadow};
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.text};
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.normal};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  margin-top: 8px;

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.accent};
    box-shadow: 0 0 5px ${(p) => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  background-color: ${(p) => p.theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  padding: 12px 20px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: ${(p) => p.theme.shadows.buttonsShadow};

  &:hover {
    background-color: ${(p) => p.theme.colors.accentDark};
  }
`;