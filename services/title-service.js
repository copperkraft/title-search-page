const titleRepository = require('../data/title-repository');
const externalTitleService = require('./external-title-service');

module.exports = {
  async getByUrl(url) {
    const cashedTitle = await titleRepository.getByUrl(url);

    if (cashedTitle) {
      return cashedTitle.title;
    }

    const externalTitle = await externalTitleService.getByUrl(url);
    await titleRepository.save(url, externalTitle);
    return externalTitle;
  }
};
