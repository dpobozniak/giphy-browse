import {renderHook} from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';

import useGiphyList from './useGiphyList';
// import apiCall from '../utils/apiCall';

import getGiphyTrendings from '../api/getGiphyTrendings';
import getGiphySearch from '../api/getGiphySearch';
jest.mock('../api/getGiphyTrendings');
jest.mock('../api/getGiphySearch');

// jest.mock('../utils/apiCall');

const response = {
  data: [{
    images: {
      fixed_width_downsampled: {
        webp: 'string',
        url: 'string',
      },
      original: {
        webp: 'string',
        url: 'string',
      }
    },
    id: '12345',
    title: 'string',
    source: 'string',
    user: {
      avatar_url: 'string',
      display_name: 'string',
      username: 'string',
    },
  }],
  pagination: {
    count: 50,
    offset: 0,
    total_count: 100,
  },
};

describe('useGiphyList custom hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update the state when api call is rejected', async () => {
    mocked(getGiphyTrendings).mockImplementationOnce(() => Promise.reject(new Error('error')));

    const {
        result,
        waitForNextUpdate
    } = renderHook(() => useGiphyList());

    await waitForNextUpdate();
    expect(result.current).toEqual({ error: true, list: [], pagination: null, isLoading: false });
  });

  it('should make the api call to `trending` to fetch the default value and set it in the state', async () => {
    // mocked(apiCall).mockImplementationOnce(() => Promise.resolve([]));
    mocked(getGiphyTrendings).mockImplementationOnce(() => Promise.resolve(response));

    const {
        result,
        waitForNextUpdate
    } = renderHook(() => useGiphyList());

    expect(getGiphyTrendings).toHaveBeenCalled();
    expect(result.current).toEqual({ error: false, list: [], pagination: null, isLoading: true });

    await waitForNextUpdate();
  });

  it('should make the api call to `search` fetch the default value and set it in the state', async () => {
    // mocked(apiCall).mockImplementationOnce(() => Promise.resolve([]));
    mocked(getGiphySearch).mockImplementationOnce(() => Promise.resolve(response));
    mocked(getGiphyTrendings).mockImplementationOnce(() => Promise.resolve(response));

    const {
        result,
        waitForNextUpdate
    } = renderHook(() => useGiphyList('search', 'happy'));

    expect(getGiphySearch).toHaveBeenCalled();
    // expect(getGiphyTrendings).not.toHaveBeenCalled();
    expect(result.current).toEqual({ error: false, list: [], pagination: null, isLoading: true });

    await waitForNextUpdate();
  });

  

  it('should update the state when api call is resolved', async () => {
    mocked(getGiphyTrendings).mockImplementationOnce(() => Promise.resolve(response));

    const {
        result,
        waitForNextUpdate
    } = renderHook(() => useGiphyList());

    await waitForNextUpdate();
    expect(result.current).toEqual({ error: false, list: response.data, pagination: response.pagination, isLoading: false });
  });

  
});