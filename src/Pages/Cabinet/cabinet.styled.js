import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: ${(p) => p.theme.shadows.cardShadow};
  text-align: center;
`;

export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  box-shadow: ${(p) => p.theme.shadows.avatarShadow};
`;

export const Name = styled.p`
  font-size: ${(p) => p.theme.fontSizes.l}px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Email = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.gray};
  margin-bottom: 16px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  cursor: pointer;
  font-weight: 500;
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;