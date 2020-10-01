import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  margin: 2em 0;
  text-align: center;
`;

const Spinner = styled.span`
  display: inline-block;
  height: 80px;
  width: 80px;

  &::after {
    animation: ${rotate} 1.2s linear infinite;
    border: 6px solid var(--color-primary);
    border-color: var(--color-primary) transparent var(--color-primary) transparent;
    border-radius: 50%;
    content: " ";
    display: block;
    height: 64px;
    margin: 8px;
    width: 64px;
  }
`;

const Loader: FunctionComponent = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

export default Loader;
