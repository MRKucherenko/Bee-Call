import styled from "styled-components";
export const SearchForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme.colors.bg};
  border-radius: ${(p) => p.theme.radii.normal};
  padding: 10px 16px;
  box-shadow: ${(p) => p.theme.shadows.boxShadow};
  gap: 10px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: ${(p) => p.theme.colors.text};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${(p) => p.theme.colors.text};

  &::placeholder {
    color: ${(p) => p.theme.colors.placeholder};
  }
`;