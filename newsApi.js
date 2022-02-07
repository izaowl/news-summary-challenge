const API_KEY = require("./apiKey")
class NewsApi {
    
    getApiInfo(searchTerm, callback) {
        let url;
        console.log("Query string :: " + searchTerm);
        if (searchTerm == '')
          url = `https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`;
        else
          url = `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${API_KEY}`
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
          callback(data);
          console.log(data)
        });
        console.log("outside")
    }
}
  module.exports = NewsApi;
