import apiCall from '../utils/apiCall';
import { apiToken, baseUrl } from '../config';
import { IGiphyListResponse } from '../types/Giphy';

/**
 * Returns GIFs by term or phrase
 * @param {Object} info Url information
 * @param {number} info.query Search query term or phrase
 * @param {string} info.offset Starting position of the results
 * @param {Object} options Request options
 */
const getGiphySearch = async (
  { query, offset }: { query?: string, offset?: number }, options: RequestInit
): Promise<IGiphyListResponse> => {
  const response = await apiCall<IGiphyListResponse>(`${baseUrl}/search?api_key=${apiToken}&q=${query}&offset=${offset}`, options);

  return response;
};

export default getGiphySearch;
