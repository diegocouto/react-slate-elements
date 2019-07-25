import React from 'react';
import styled from 'styled-components';

import CodeIcon from './assets/code-icon.svg';
import GithubIcon from './assets/github-icon.svg';

const AppHeader: React.FunctionComponent = () => (
  <HeaderContainer>
    <Link href="https://github.com/diegocouto/react-slate-elements/blob/master/examples/src/App.tsx">
      <CodeIcon /> View source
    </Link>

    <Link href="https://github.com/diegocouto/react-slate-elements">
      <GithubIcon /> Github
    </Link>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 50px 0;
  width: 100%;
`;

const Link = styled.a`
  display: flex;
  font-size: 0.98rem;
  color: #606482;
  text-decoration: none;
  transition: all 0.2s ease-in;
  margin-left: 15px;

  :hover, :focus {
    color: #536DFE;
  }

  :active {
    transform: translateY(2px);
  }

  svg {
    opacity: 0.8;
    margin-right: 5px;
    width: 18px;
    height: 18px;
  }
`;

export default AppHeader;