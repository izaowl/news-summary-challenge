const NewsApi = require('./newsApi');

require('jest-fetch-mock').enableMocks()

describe('NewsApi article', () => {
  it('calls fetch and loads headline info', async () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
      webTitle: 'Australia'
    }));

    api.getApiInfo('headline', (searchTerm) => {
      expect(headline.webTitle).toBe('Australia');
    });
  });
});