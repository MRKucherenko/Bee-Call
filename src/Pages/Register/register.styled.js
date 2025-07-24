import styled from "styled-components";

export const FormWrap = styled.div`
  max-width: 400px;
  margin: 60px auto;
  padding: 32px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.sadVew};
  box-shadow: ${(p) => p.theme.shadows.cardShadow};
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.ml}px;
  margin-bottom: 24px;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  border: 1px solid #ccc;
  border-radius: ${(p) => p.theme.radii.normal};
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  background-color: ${(p) => p.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;