import apiCall from '../utils/apiCall';
import { apiToken, baseUrl } from '../config';
import { IGiphyListResponse } from '../types/Giphy';

/**
 * Returns GIFs by 'trending' label
 * @param {Object} info Url information
 * @param {number} info.offset Starting position of the results
 * @param {Object} options Request options
 */
const getGiphyTrendings = async (
  { offset }: { offset?:number }, options: RequestInit
): Promise<IGiphyListResponse> => {
  const response = await apiCall<IGiphyListResponse>(`${baseUrl}/trending?api_key=${apiToken}&offset=${offset}`, options);

  return response;
};

export default getGiphyTrendings;
