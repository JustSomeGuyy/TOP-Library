







// The library array to hold the books.

let library = [];

function Book (name, author, pages, read) {
    this.title = name;
    this.author = author;
    this.pages = pages;
    this.read = readOrNot;
    addBookToLibrary(this)
}

function addBookToLibrary(Book){
    library.push(Book)
}

function readOrNot(){
    if(document.getElementById('read').checked){
        this.read = 'Read';
    } else {
        this.read = 'Not read'
    }
}


const bookOne = new Book('Carrie', 'Stephen King', 199, 'Not read');
const bookTwo = new Book('The Shining', 'Stephen King', 447, 'Not read')

console.log(library)



