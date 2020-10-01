/**
 * Utilty function that makes a request to the enpoint and returns the response body
 * @param input Url of the resource
 * @param init Options for HTTP requests
 */
const apiCall = async<T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  try {
    const response: Response = await fetch(input, init);

    if (!response.ok) {
      throw new Error(`apiCall failed with HTTP status ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch(error) {
    throw new Error(`apiCall failed: ${error}`);
  }
}

export default apiCall;