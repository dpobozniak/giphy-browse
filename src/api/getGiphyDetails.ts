import apiCall from '../utils/apiCall';
import { apiToken, baseUrl } from '../config';
import { IGiphyDetailsResponse } from '../types/Giphy';

/**
 * Returns a GIF’s metadata based on the GIF ID specified
 * @param {Object} info Url information
 * @param {string} info.ids ID of the GIF you want details for
 * @param {Object} options Request options
 */
const getGiphyDetails = async (id?: string): Promise<IGiphyDetailsResponse> => {
  const response = await apiCall<IGiphyDetailsResponse>(`${baseUrl}/${id}?api_key=${apiToken}`);

  return response;
};

export default getGiphyDetails;
