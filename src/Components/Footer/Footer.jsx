import * as CS from "./footer.styled";
import { RxGithubLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <>
      <CS.FooterWrap>
        <CS.FooterText>
          © 2025 PhoneBook App. Built with React & Styled-Components.
        </CS.FooterText>
        <CS.GitHubLink
          href="https://github.com/MRKucherenko" 
          target="_blank"
        >
          <RxGithubLogo />
        </CS.GitHubLink>
      </CS.FooterWrap>
    </>
  );
};
