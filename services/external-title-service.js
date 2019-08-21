const request = require('request-promise-native');

const apiUri = 'http://webwrap-title.herokuapp.com/crawl.json?spider_name=scraptitle-netflix&start_requests=true&title_url=';

module.exports = {
  async getTitle(url) {
    const options = {
      uri: `${apiUri}${url}`,
      json: true
    };

    const response = await request(options);
    const items = response.items;

    if (!items || !items.length) {
      throw new Error('Unable to get title');
    }

    return items[0].title;
  }
};

