import styled from "styled-components";

export const Card = styled.li`
  background-color: ${(p) => p.theme.colors.cardBackground};
  padding: 20px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: ${(p) => p.theme.shadows.boxShadow};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: ${(p) => p.theme.fontSizes.ml}px;
  color: ${(p) => p.theme.colors.text};
`;

export const Info = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.mutedText};
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  border: none;
  color: white;
  border-radius: ${(p) => p.theme.radii.normal};
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: ${(p) => p.theme.shadows.buttonsShadow};
  font-weight: 500;

  &:first-child {
    background-color: ${(p) => p.theme.colors.accent};

    &:hover {
      background-color: ${(p) => p.theme.colors.accentDark};
    }
  }

  &:last-child {
    background-color: ${(p) => p.theme.colors.danger};
    color: white;
    box-shadow: ${(p) => p.theme.shadows.danger};

    &:hover {
      background-color: ${(p) => p.theme.colors.darkRed};
    }
  }
`;