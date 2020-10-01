import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';

const StyledHeader = styled.header`
  background: #fff;
  border-bottom: 1px solid #d8dfe8;
  bottom: 0;
  display: grid;
  grid-column: full;
  grid-template-columns: inherit;
  position: sticky;
`;

const Wrapper = styled.div`
  align-items: center;
  column-gap: 4em;
  display: flex;
  flex-wrap: wrap;
  grid-column: main;
  padding: 1.3em 0;
  row-gap: 1.5em;
`;

const Header: FunctionComponent = () => {
  const history = useHistory();
  const { query } = useParams();

  const decodedQuery = decodeURIComponent(query);

  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      history.push(`/search/${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <StyledHeader>
      <Wrapper>
        <Logo title={process.env.APP_NAME} />
        <Navigation />
        <SearchForm
          initialValue={query && decodedQuery}
          onSubmit={handleSearch}
        />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
