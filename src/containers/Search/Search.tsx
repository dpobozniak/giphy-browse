import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import List from '../List/List';

const Search:FunctionComponent = () => {
  const { query } = useParams();

  const decodedQuery = decodeURIComponent(query);

  return (
    <List
      title={decodedQuery}
      type="search"
      query={query}
    />
  );
};

export default Search;
