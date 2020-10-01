import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { IGiphyItem } from '../../types/Giphy';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(213px, 1fr));
  grid-gap: 1em;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled(Link)`
  align-items: center;
  display: flex;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Picture = styled.picture`
  width: 100%;
`;

interface IList {
  list: IGiphyItem[];
}

const List: FunctionComponent<IList> = ({ list }: IList) => {
  const location = useLocation();
  
  return (
    <ListWrapper>
      {list.map((item) => (
        <ListItem
          to={{
            pathname: `/details/${item.id}`,
            // Sets the `background` in location state to open in modal
            state: { background: location }
          }}
          key={item.id}
        >
          <Picture>
            <source srcSet={item.images.fixed_width_downsampled.webp} type="image/webp" />
            <img src={item.images.fixed_width_downsampled.url} alt={item.title} />
          </Picture>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default List;
