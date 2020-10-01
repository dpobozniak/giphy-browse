import React, { FunctionComponent, useState } from 'react';

import useGiphyList from '../../hooks/useGiphyList';

import SectionTitle from '../../components/UI/SectionTitle/SectionTitle';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/UI/Loader/Loader';
import Message from '../../components/UI/Message/Message';
import Pagination from '../../components/Pagination/Pagination';

interface IList {
  title?: string;
  type?: 'trending' | 'search' | 'ids';
  query?: string;
}

const List:FunctionComponent<IList> = ({ title, type, query }: IList) => {
  const [paginationOffset, setPaginationOffset] = useState(0);
  const { isLoading, list, pagination, error } = useGiphyList(type, query, paginationOffset);

  const handleGoPrev = () => {
    if (pagination && paginationOffset > 0) {
      setPaginationOffset(paginationOffset - pagination.count);
    }
  };

  const handleGoNext = () => {
    if (pagination && paginationOffset < pagination?.total_count) {
      setPaginationOffset(paginationOffset + pagination.count);
    }
  };

  return (
    <section>
      {
        title
        && (
          <SectionTitle>{title}</SectionTitle>
        )
      }

      {
        isLoading
        && (
          <Loader />
        )
      }

      {
        !isLoading && error
        && (
          <Message type="error">Ups... we got some problem :(</Message>
        )
      }

      {
        !isLoading && !error && list.length === 0
        && (
          <Message type="error">There are no gifs you are looking for :(</Message>
        )
      }

      {
        !isLoading && !error && list.length > 0
        && (
          <>
            <ItemList list={list} />

            {pagination && pagination.total_count > pagination.count
              && (
                <Pagination
                  prevDisabled={pagination.offset < pagination.count}
                  nextDisabled={pagination.offset + pagination.count >= pagination.total_count}
                  onClickPrev={handleGoPrev}
                  onClickNext={handleGoNext}
                />
              )
            }
          </>
        )
      }
    </section>
  )
};

export default List;
