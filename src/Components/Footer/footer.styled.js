import styled from "styled-components";

export const FooterWrap = styled.footer`
  background-color: ${(p) => p.theme.colors.mainColor};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  padding: 24px 16px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
`;

export const FooterText = styled.p`
  margin: 0;
`;

export const GitHubLink = styled.a`
  color: ${(p) => p.theme.colors.accent};
  font-size: 32px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(p) => p.theme.colors.accentDark};
  }
`;