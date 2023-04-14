function openForm() {
    document.querySelector('.overlay').style.display = 'block';
  document.getElementById("popup").style.display = "block";
}

function closeForm() {
    document.querySelector('.overlay').style.display = 'none';
  document.getElementById("popup").style.display = "none";
}
  

// function showForm() {
//     let form = document.getElementById("popup");
//     form.style.display = "block";
// }

const library = [];
// constructor for the library
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
    let read = document.getElementById('readSelect').value;
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
        let readStatus = book.haveYouRead ? "Yes" : "No";
        let info = "<div class='bookCard'>" + "<p>Title:" + book.title + "</p>" +
            "<p>Author: " + book.author + "</p>" +
            "<p>Pages: " + book.amountOfPages + "</p>" +
            "<p>Read: <select id='readSelect" + i + "' onchange='updateReadStatus(" + i + ")'>" +
            "<option value='yes'" + (readStatus === "Yes" ? "selected" : "") + ">Yes</option>" +
            "<option value='no'" + (readStatus === "No" ? "selected" : "") + ">No</option>" +
            "</select></p></div>";
        display.innerHTML += info;
    }
}
    
function updateReadStatus(index) {
    let readCheckbox = document.getElementById("readCheckbox" + index);
    library[index].haveYouRead = readCheckbox.checked;
}