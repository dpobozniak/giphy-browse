import React, { FunctionComponent } from 'react';

import { getFavourites } from '../../api/giphyFavourites';

import List from '../List/List';
import Message from '../../components/UI/Message/Message';
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle';

const Favourites:FunctionComponent = () => {
  const query = getFavourites();

  if (!query) {
    return (
      <section>
        <SectionTitle>My favourites</SectionTitle>
        <Message>You still do not have any favourites? :(</Message>
      </section>
    )
  }

  return (
    <List
      title="My favourites"
      type="ids"
      query={query}
    />
  );
};

export default Favourites;
