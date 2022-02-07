(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var API_KEY = "407711ba-93f5-43df-8cf5-30bcbd9b3fae";
      module.exports = API_KEY;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var API_KEY = require_apiKey();
      var NewsApi2 = class {
        getApiInfo(searchTerm, callback) {
          let url;
          console.log("Query string :: " + searchTerm);
          if (searchTerm == "")
            url = `https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`;
          else
            url = `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${API_KEY}`;
          fetch(url).then((response) => response.json()).then((data) => {
            callback(data);
            console.log(data);
          });
          console.log("outside");
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.newsInfo = null;
        }
        setNewsInfo(repoInfo) {
          this.newsInfo = newsInfo;
        }
        getNewsInfo() {
          return this.newsInfo;
        }
        setToEmpty() {
          this.newsInfo = null;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          const submitButtonEl = document.querySelector("#submit-button");
          const repoInputEl = document.querySelector("#repo-name-input");
          submitButtonEl.addEventListener("click", () => {
            const searchTerm = repoInputEl.value;
            this.api.getApiInfo(searchTerm, (newsData) => {
              this.display(newsData, searchTerm);
            });
          });
        }
        display(data, searchTerm) {
          const newsList = document.querySelector(".class-list");
          data.response.results.forEach((result) => {
            console.log(result);
            let li = document.createElement("li");
            if (searchTerm.length == 0) {
              let thumbnail = document.createElement("img");
              thumbnail.setAttribute("src", result.fields.thumbnail);
              document.body.appendChild(thumbnail);
            }
            let a = document.createElement("a");
            a.setAttribute("href", result.webUrl);
            a.setAttribute("target", "_blank");
            a.textContent = result.webTitle;
            li.appendChild(a);
            newsList.appendChild(li);
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var api = new NewsApi();
  var model = new NewsModel();
  var view = new NewsView(model, api);
})();
