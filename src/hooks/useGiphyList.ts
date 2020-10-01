import { useState, useEffect } from 'react';

import getGiphyTrendings from '../api/getGiphyTrendings';
import getGiphySearch from '../api/getGiphySearch';
import getGiphyByIds from '../api/getGiphyByIds';

import { IGiphyItem, IGiphyPagination, IGiphyListResponse } from '../types/Giphy';

interface IUseGiphyList {
  error: boolean;
  isLoading: boolean;
  list: IGiphyItem[];
  pagination: IGiphyPagination | null;
}

const useGiphyList = (type?: string, query?: string, offset?: number):IUseGiphyList => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<IGiphyItem[]>([]);
  const [pagination, setPagination] = useState<IGiphyPagination | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchOptions = { signal: controller.signal };

    const fetchData = async () => {
      try {
        let response: IGiphyListResponse;

        if (type === 'search' && query) {
          response = await getGiphySearch({ query, offset }, fetchOptions);
        } else if (type === 'ids' && query) {
          response = await getGiphyByIds({ ids: query }, fetchOptions);
        } else {
          response = await getGiphyTrendings({ offset }, fetchOptions);
        }

        setList(response.data);
        setPagination(response.pagination);
        setLoading(false);
      } catch(e) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort()
  }, [type, query, offset]);

  return {
    error,
    list,
    isLoading,
    pagination,
  };
};

export default useGiphyList;
