import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

import useGiphyDetails from '../../hooks/useGiphyDetails';
import { addToFavourites, checkIfFavourite, removeFromFavourites } from '../../api/giphyFavourites';

import Loader from '../../components/UI/Loader/Loader';
import Message from '../../components/UI/Message/Message';
import ItemDetails from '../../components/ItemDetails/ItemDetails';

const Details:FunctionComponent = () => {
  const { id } = useParams();
  const { isLoading, item, error } = useGiphyDetails(id);
  const [isFavourite, setIsFavourite] = useState(checkIfFavourite(id));

  const handleToggleFavourites = (id: string) => {
    if (isFavourite) {
      setIsFavourite(false);
      removeFromFavourites(id);
    } else {
      setIsFavourite(true);
      addToFavourites(id);
    }
  };

  return (
    <>
      {
        isLoading
        && (
          <Loader />
        )
      }

      {
        !isLoading && error
        && (
          <Message type="error">We have some problem getting this gif :(</Message>
        )
      }

      {
        !isLoading && !error && item
        && (
          <ItemDetails
            isFavourite={isFavourite}
            onToggleFavourites={handleToggleFavourites}
            item={item}
          />
        )
      }
    </>
  );
};

export default Details;
