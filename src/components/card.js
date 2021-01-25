
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  import axios from 'axios';

  function articleMaker(article){
      let div1 = document.createElement('div');
      div1.classList.add('card');
      let div2 = document.createElement('div');
      div2.classList.add('headline');
      div2.textContent = article.headline;
      div1.appendChild(div2);
      let div3 = document.createElement('div');
      div3.classList.add('author');
      div1.appendChild(div3);
      let div4 = document.createElement('div');
      div4.classList.add('img-container');
      div3.appendChild(div4);
      let img = document.createElement('img');
      img.setAttribute('src', article.authorPhoto);
      div4.appendChild(img);
      let span = document.createElement('span');
      span.textContent = 'By ' + article.authorName;
      div3.appendChild(span);
      div1.addEventListener('click', (event)=> console.log(article.headline));
      return div1;
  }
  
  let cards = document.querySelector('.cards-container');
  
  axios.get('https://lambda-times-api.herokuapp.com/articles')
      .then(
          function(r){
              console.log(r.data.articles);
              Object.keys(r.data.articles).forEach( element =>{
                  r.data.articles[element].forEach( a => {
                      console.log(a);
                      console.log(cards);
                      console.log(articleMaker(a));
                      cards.appendChild(articleMaker(a));
                  })
              })
          }
      )  