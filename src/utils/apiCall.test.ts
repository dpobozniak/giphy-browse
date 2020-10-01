import apiCall from './apiCall';
import fetchMock from 'fetch-mock-jest';

describe('apiCall test', () => {
  afterEach(() => {
      fetchMock.restore();
  });

  it('apiCall returns valid json', async () => {
    fetchMock.mock('validUrl', {
      status: 200,
      body: {
        message: 'hello world'
      },
    });
   
    const data = await apiCall('validUrl');

    expect(data).toEqual({ message: 'hello world' });
  });

  it('apiCall throws error when gets not valid json', async () => {
    fetchMock.mock('validUrl', {
      status: 200,
      body: 'hello world',
    });
   
    try {
      await apiCall('validUrl');
    } catch (error) {
      expect(error instanceof Error).toEqual(true);
      expect(error.toString()).toMatch(/apiCall failed/)
    }
  });

  it('apiCall throws error when response is not success', async () => {
    fetchMock.get('validUrl', {
      status: 404,
    });
   
    try {
      await apiCall('validUrl');
    } catch (error) {
      expect(error instanceof Error).toEqual(true);
      expect(error.toString()).toMatch(/apiCall failed with HTTP status 404/)
    }
  });
});