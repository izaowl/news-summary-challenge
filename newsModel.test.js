/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsModel = require('./newsModel');

 describe('NewsModel', () => {
    const news = new NewsModel()
    expect(news.getNewsInfo()).toEqual([])
})