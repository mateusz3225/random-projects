
const DivforCards = document.querySelector('.book-cards');
const ButtonBooksAdd = document.querySelector('.AddBookt');
const body = document.querySelector('body');

const BookForm = document.createElement('div');
BookForm.classList.add('book-form');
BookForm.innerHTML = `
    <input type="text" id="title" placeholder="Title">
    <input type="number" id="pages" placeholder="Pages">
    <p>Is the book read?<input type="checkbox" id="read" placeholder="Read"></p>
    <textarea id="description" placeholder="Description"></textarea>
    <button id="add-book">Add Book</button>
`;
console.log(BookForm);

BookArray = [];
function BookConstructor(title,pages,desc,read) {
    this.Id = crypto.randomUUID();
    this.title = title;
    this.pages = pages;
    this.shortDesc = desc;
    this.read = read;
    this.readunread = function() {
        
    }
}

function AddBook(title, pages, desc, read) {
    const newBook = new BookConstructor(title, pages, desc, read);
    BookArray.push(newBook);
}

for (var x in BookArray[0]){
    console.log(BookArray[0][x]);
}
function AddBooktoDiv() {
        DivforCards.innerHTML += `<div class="book-card" data-index-number="${BookArray[BookArray.length - 1].Id}"><div class="card-text">Book Title: ${BookArray[BookArray.length - 1].title}, Pages: ${BookArray[BookArray.length - 1].pages}, Description: ${BookArray[BookArray.length - 1].shortDesc}, Read: ${BookArray[BookArray.length - 1].read}</div><button class="button-readunread">Mark as Read/Unread</button><button class="remove-book">Remove</button></div>`;
}
ButtonBooksAdd.addEventListener('click', function() {
    if (!document.body.contains(BookForm)) {
        document.body.appendChild(BookForm) ;
    } else {
        document.body.removeChild(BookForm);
    }
});

body.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'add-book') {
        let Idtitle = document.querySelector('#title');
    let Idpages = document.querySelector('#pages');
    let ReadUnread = document.querySelector('#read');
    let Iddescription = document.querySelector('#description');

        const title = Idtitle.value;
        const pages = Idpages.value;
        const description = Iddescription.value;
        const read = ReadUnread.checked ? "Yes" : "No";
        AddBook(title, pages, description, read);
        AddBooktoDiv();
    }
});
body.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-book')) {
        const bookId = e.target.parentElement.getAttribute('data-index-number');
        BookArray.splice(BookArray.findIndex(book => book.Id === bookId), 1);
        e.target.parentElement.remove();
        console.log(BookArray);
    }
});
body.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('button-readunread')) {
        const bookId = e.target.parentElement.getAttribute('data-index-number');
        const book = BookArray.find(book => book.Id === bookId);
        if(book.read === "Yes"){
            book.read = "No"; e.target.parentElement.querySelector('.card-text').textContent = `Book Title: ${book.title}, Pages: ${book.pages}, Description: ${book.shortDesc}, Read: ${book.read}`;
        } else {book.read = "Yes"; e.target.parentElement.querySelector('.card-text').textContent = `Book Title: ${book.title}, Pages: ${book.pages}, Description: ${book.shortDesc}, Read: ${book.read}`;}
       console.log(book);
    }
});