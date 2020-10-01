import { useState, useEffect } from 'react';

import getGiphyDetails from '../api/getGiphyDetails';

import { IGiphyItem, IGiphyDetailsResponse } from '../types/Giphy';

interface IUseGiphyDetails {
  error: boolean;
  isLoading: boolean;
  item: IGiphyItem | null;
}

const useGiphyDetails = (id:string):IUseGiphyDetails => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState<IGiphyItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IGiphyDetailsResponse = await getGiphyDetails(id);

        setItem(response?.data);
        setLoading(false);
      } catch(e) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    error,
    item,
    isLoading,
  };
};

export default useGiphyDetails;
