import apiCall from '../utils/apiCall';
import { apiToken, baseUrl } from '../config';
import { IGiphyListResponse } from '../types/Giphy';

/**
 * Returns metadata of multiple GIFs based on the GIF IDs specified
 * @param {Object} info Url information
 * @param {string} info.ids Specified gif IDs, separated by commas
 * @param {Object} options Request options
 */
const getGiphyByIds = async (
  { ids }: { ids: string }, options: RequestInit
): Promise<IGiphyListResponse> => {
  const response = await apiCall<IGiphyListResponse>(`${baseUrl}?api_key=${apiToken}&ids=${ids}`, options);

  return response;
};

export default getGiphyByIds;
