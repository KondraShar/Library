
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

function newBook(title, author, pages, read, yearWritten) {
    library.push(new Book(title, author, pages, read, yearWritten));
}


newBook("aBook", "author", 393, true, 1290);
newBook("hello", "author", 39, true, 1290);
newBook("breakdance classics", "mozart", 38, true, 1469);
newBook("aBook", "author", 234, true, 1290);
newBook("aBook", "author", 300, true, 1290);


const libDiv = document.querySelector("#library");

/*
function renderBooksInLibrary() {
    const table = document.createElement('table');

    for(const book of library) {
        const tRow = document.createElement('tr');
        const tData = document.createElement('td');

        tData.textContent = book.info();

        tRow.appendChild(tData);
        table.appendChild(tRow);
    }

    libDiv.appendChild(table);
}

renderBooksInLibrary();
*/

function renderBooksInLibrary() {

    for(const book of library) {
        const card = document.createElement("div");
        card.classList.add("card");

        const bookInfoContainer = document.createElement("div");
        const bookInfo = document.createElement("div");
        const bookTitle = document.createElement("div");
        const bookAuthor = document.createElement("div");
        const bookRead = document.createElement("button");
        bookInfoContainer.classList.add("card-book-info-container");
        bookInfo.classList.add("card-book-info");
        bookTitle.classList.add("card-title");
        bookAuthor.classList.add("card-author");
        bookRead.classList.add("card-read-btn");
        bookRead.textContent = "?";

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