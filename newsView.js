class NewsView {
    constructor(model, api) {
      this.model = model;
      this.api = api;
  
      const submitButtonEl = document.querySelector('#submit-button');
      const repoInputEl = document.querySelector('#repo-name-input');
  
      submitButtonEl.addEventListener('click', () => {
      const searchTerm = repoInputEl.value;
        
        this.api.getApiInfo(searchTerm, newsData => {
          
          this.display(newsData, searchTerm);
        });
  
      });
    }
  
    display(data, searchTerm) {

        const newsList = document.querySelector('.class-list');

        data.response.results.forEach(result =>{
            console.log(result);
          
          let li = document.createElement('li');
          if (searchTerm.length==0){
            let thumbnail = document.createElement('img');
            thumbnail.setAttribute('src',result.fields.thumbnail);
            document.body.appendChild(thumbnail)
          }
          let a =  document.createElement('a');
          a.setAttribute('href',result.webUrl);
          a.setAttribute('target','_blank');
          a.textContent = result.webTitle;
          li.appendChild(a);
          newsList.appendChild(li);
        });
    }
  }
  
  module.exports = NewsView;