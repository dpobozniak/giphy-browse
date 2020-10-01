import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IGiphyItem } from '../../types/Giphy';

import SectionTitle from '../UI/SectionTitle/SectionTitle';

const Wrapper = styled.div`
  align-items: start;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(213px, 1fr));
  word-break: break-all;

  img {
    max-width: 100%;
  }
`;

const User = styled.div`
  display: grid;
  grid-template-areas:
    "avatar displayname"
    "avatar nickname";
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.7em;
`;

const UserAvatar = styled.img`
  grid-area: avatar;
`;

const UserDisplayName = styled.span`
  grid-area: displayname;
  font-size: 1.3em;
`;

const UserNickName = styled.span`
  grid-area: nickname;
`;

const FavouritesButton = styled.button`
  background: none;
  border: 0 none;
  padding: 0.5em;
`;

interface IItem {
  item: IGiphyItem;
  isFavourite: boolean;
  onToggleFavourites: (id: string) => void;
}

const ItemDetails: FunctionComponent<IItem> = ({ item, isFavourite, onToggleFavourites }: IItem) => {
  const handleAddToFavourites = () => onToggleFavourites(item.id);

  return (
    <section>
      <SectionTitle>{item?.title}</SectionTitle>
      <Wrapper>
        <div>
          {item?.user && (
            <User>
              {item?.user?.avatar_url && <UserAvatar src={item.user.avatar_url} height="60" width="60" />}
              {item?.user?.display_name && <UserDisplayName>{item.user.display_name}</UserDisplayName>}
              {item?.user?.username && <UserNickName>@{item.user.username}</UserNickName>}
            </User>
          )}

          <dl>
            <dt>Favourite</dt>
            <dd>
              <FavouritesButton onClick={handleAddToFavourites}>
                {isFavourite
                  ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E91E63" fill="#E91E63" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                  )
                  : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E91E63" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                  )
                }
              </FavouritesButton>
            </dd>
          </dl>

          <dl>
            <dt>Share url</dt>
            <dd>{window.location.href}</dd>
          </dl>

          <dl>
            <dt>Gif url</dt>
            <dd>{item.images.original.url}</dd>
          </dl>

          {item?.source && (
            <dl>
              <dt>Source</dt>
              <dd>{item?.source}</dd>
            </dl>
          )}
        </div>

        <picture>
          <source srcSet={item.images.original.webp} type="image/webp" />
          <img src={item.images.original.url} alt={item.title} />
        </picture>
      </Wrapper>
    </section>
  );
};

export default ItemDetails;
