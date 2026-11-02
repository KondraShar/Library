
const library = [];

function Book(title, author, pages, read, yearWritten) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.yearWritten = yearWritten;
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + " was written in " + this.yearWritten + " . BTW i have read it:" + this.read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read, yearWritten) {
    library.push(new Book(title, author, pages, read, yearWritten));
}
 
// Data seeder
addBookToLibrary("aBook", "author", 393, true, 1290);
addBookToLibrary("hello", "author", 39, true, 1290);
addBookToLibrary("breakdance classics", "mozart", 38, true, 1469);
addBookToLibrary("aBook", "author", 234, true, 1290);
addBookToLibrary("aBook", "author", 300, true, 1290);

const libDiv = document.querySelector("#library");


function renderBooksInLibrary() {

    for(const book of library) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = book.id;

        const bookInfoContainer = document.createElement("div");
        const bookInfo = document.createElement("div");
        const bookTitle = document.createElement("div");
        const bookAuthor = document.createElement("div");
        const bookRead = document.createElement("button");
        bookInfoContainer.classList.add("card-book-info-container");
        bookInfo.classList.add("card-book-info");
        bookTitle.classList.add("card-title");
        bookAuthor.classList.add("card-author");

        if (book.read) {
            bookRead.textContent = "\u2713";
            bookRead.classList.add("card-have-read-btn", "card-read-btn");
        } else {
            bookRead.textContent = "?";
            bookRead.classList.add("card-have-not-read-btn",  "card-read-btn");
        }

        const cover = document.createElement("img");
        cover.classList.add("card-cover");
        
        const cardBottom = document.createElement("div");
        const pageInfo = document.createElement("div");
        const pageIcon = document.createElement("div");
        const pages = document.createElement("div");
        const deleteBtn = document.createElement("button");
        cardBottom.classList.add("card-bottom");
        pageInfo.classList.add("card-page-info");
        pageIcon.classList.add("card-page-img");
        pages.classList.add("card-pages");
        deleteBtn.classList.add("card-delete");

        bookTitle.textContent = book.title;
        bookAuthor.textContent = "by " + book.author;
        pages.textContent = book.pages + " pages";

        bookInfo.appendChild(bookTitle);
        bookInfo.appendChild(bookAuthor);
        bookInfoContainer.append(bookInfo);
        bookInfoContainer.append(bookRead);

        card.appendChild(bookInfoContainer);
        card.appendChild(cover);

        pageInfo.appendChild(pageIcon);
        pageInfo.appendChild(pages);
        cardBottom.appendChild(pageInfo);
        cardBottom.appendChild(deleteBtn);
        card.appendChild(cardBottom);

        libDiv.appendChild(card);
    }
}

renderBooksInLibrary();


// Add a book to the library through modal

const addBookDialog = document.querySelector("#addBookDialog");
const addBookForm = document.querySelector("#addBookForm");
const addNewBookBtn = document.querySelector("#confirmNewBookBtn");
const addBookBtn = document.querySelector("#addBook");

addBookBtn.addEventListener( "click", (e) => {
    addBookForm.reset();
})


addNewBookBtn.addEventListener( "click", (e) => {
    e.preventDefault();
    const formData = new FormData(addBookForm);
    const data = Object.fromEntries(formData);

    addBookToLibrary(
        data.bookTitle,
        data.bookAuthor,
        data.bookPages,
        data.bookHaveRead === "on",
        data.bookYearWritten
    );

    addBookForm.reset();
    addBookDialog.close();
    libDiv.replaceChildren();
    renderBooksInLibrary();

})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    addBookForm.reset();
    addBookDialog.close();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'a') {
    addBookDialog.showModal();
  }
});



// Delete a book from the library

libDiv.addEventListener( "click", (e) => {
    const deleteButton = e.target.closest(".card-delete");
    if (!deleteButton) return;

    const card = e.target.closest(".card");
    const id = card.dataset.id;
    const index = library.findIndex(book => book.id === id);
    if (index !== -1 ) library.splice(index, 1);

    libDiv.replaceChildren();
    renderBooksInLibrary();
})



libDiv.addEventListener( "click", (e) => {
    const bookReadButton = e.target.closest(".card-read-btn");
    if (!bookReadButton) return;

    const card = bookReadButton.closest(".card");
    const book = library.find(book => book.id === card.dataset.id);
    if (!book) return;

    book.toggleRead();

    libDiv.replaceChildren();
    renderBooksInLibrary();
})
