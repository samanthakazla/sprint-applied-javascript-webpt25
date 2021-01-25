
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  function Header() {
    const divOne = document.createElement ('div');
    divOne.classList.add('header');
    const spanOne= document.createElement ('span');
    spanOne.classList.add('date');
    spanOne.textContent = 'MARCH 28, 2020';
    divOne.appendChild(spanOne);
    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    divOne.appendChild(h1);
    const spanTwo = document.createElement('span');
    spanTwo.classList.add('temp');
    spanTwo.textContent = '98°';
    divOne.appendChild(spanTwo);
    return divOne;
}

let header = Header();
console.log(header);
let head = document.querySelector('.header-container');
head.appendChild(Header());
let heads = document.querySelectorAll('.header');
heads[0].style.display = 'none'; 
