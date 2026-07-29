
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


newBook("helakfl", "adkfhalkd", 393939, true, 1290);
newBook("hello", "adkfhalkd", 393939, true, 1290);
newBook("breakdance classics", "mozart", 393939, true, 1469);
newBook("helakfl", "adkfhalkd", 393939, true, 1290);
newBook("helakfl", "adkfhalkd", 393939, true, 1290);


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

