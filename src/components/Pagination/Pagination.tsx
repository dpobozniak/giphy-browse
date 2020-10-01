import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from '../UI/Button/Button';

const Wrapper = styled.div`
  margin: 2em 0;
  text-align: center;
`;

const Item = styled(Button)`
  margin: 0 0.5em;
`;

interface IPagination {
  onClickPrev: () => void;
  onClickNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

const Pagination:FunctionComponent<IPagination> = ({
  onClickPrev, onClickNext, prevDisabled, nextDisabled,
}: IPagination) => {

  return (
    <Wrapper>
      <Item $kind="primary" disabled={prevDisabled} onClick={onClickPrev}>← Prev</Item>
      <Item $kind="primary" disabled={nextDisabled} onClick={onClickNext}>Next →</Item>
    </Wrapper>
  );
};

export default Pagination;
