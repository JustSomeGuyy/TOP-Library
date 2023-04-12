function showForm() {
    let form = document.getElementById("bookForm");
    form.style.display = "block";
}

const library = [];

    function Book(name, author, pages, read) {
      this.title = name;
      this.author = author;
      this.amountOfPages = pages;
      this.haveYouRead = read;
      return this;
    }

    function addBook(){
        let title = document.getElementById('titleInput').value;
        let author = document.getElementById('authorInput').value;
        let pages = document.getElementById('pagesInput').value;
        let read = document.getElementById('Read').checked;
        let book = new Book(title, author, pages, read);
        library.push(book);
        document.getElementById("bookForm").reset();
        displayLibrary();
    }

    function displayLibrary() {
        let display = document.getElementById("displayLibrary");
        display.innerHTML = ""; // clear the display
    
        for (let i = 0; i < library.length; i++) {
            let book = library[i];
            let info = "<p>Title: " + book.title + "</p>" +
                "<p>Author: " + book.author + "</p>" +
                "<p>Pages: " + book.amountOfPages + "</p>" +
                "<p>Read: <input type='checkbox' id='readCheckbox" + i + "' onclick='updateReadStatus(" + i + ")' " + (book.haveYouRead ? "checked" : "") + "></p><hr>";
            display.innerHTML += info;
        }
    }
    
    function updateReadStatus(index) {
        let readCheckbox = document.getElementById("readCheckbox" + index);
        library[index].haveYouRead = readCheckbox.checked;
    }