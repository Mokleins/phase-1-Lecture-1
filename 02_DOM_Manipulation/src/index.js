//BookStore has been moved to data.js

//Should Be Responsible  for DOM Rendering

//Render
const renderHeader = name => {
  const title = document.querySelector("#store-nmame");
  title.textContent = name;
};

// 2) Render FooterW

const renderFooter = bookStore => {
  const footerDivs = document.querySelectorAll("footer div");
  footerDivs[0].textContent = bookStore.name;
  footerDivs[1].textContent = bookStore.address;
  footerDivs[2].textContent = bookStore.hours;
};

// Render BookCards 
const renderBookCard = books => {
    //Creating the elements
    const bookCard = document.createElement('li');
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const price = document.createElement("p");
    const bookImage = document.createElement('img')


    //apply book information to the sub-elements
    bookTitle.textContent = books.title;
    bookAuthor.textContent = books.author;
    price.textContent = `$${books.price.toFixed(2)}`
    bookImage.src = books.imageUrl;

    //Apply class necessary for bookCard styling 
    bookCard.className ='list-li';
    bookCard.append(bookTitle, bookAuthor, price, bookImage);

    //Query Selector 
    const bookCardContainer = document.querySelector('#book-list')

    //Append bookCard to bookCardContainer
    bookCardContainer.appendChild(bookCard);
}

// Function Invocations

renderHeader(bookStore.name);
renderFooter(bookStore);
bookStore.inventory.forEach(renderBookCard);