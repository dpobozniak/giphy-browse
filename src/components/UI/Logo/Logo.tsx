import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled.h1`
  font-size: 2em;
  margin: 0;
`;

const LogoLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
`;

interface ILogo {
  title?: string;
}

const Logo:FunctionComponent<ILogo> = ({ title = 'AppName' }: ILogo) => (
  <StyledLogo>
    <LogoLink to="/">
      {title}
    </LogoLink>
  </StyledLogo>
);

export default Logo;
