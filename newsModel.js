class NewsModel {
    constructor() {
      this.newsInfo = null
    }
  
    setNewsInfo(repoInfo) {
      this.newsInfo = newsInfo;
    }
  
    getNewsInfo() {
      return this.newsInfo;
    }

    setToEmpty(){
      this.newsInfo = null;
    }
  }
  
  module.exports = NewsModel;