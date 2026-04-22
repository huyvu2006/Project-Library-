import { getBookData, myLibrary } from "./data";

let author = document.querySelector("#author"),
  title = document.querySelector("#title"),
  pages = document.querySelector("#pages"),
  bookForm = document.querySelector(".book-form");

let addBook = document.querySelector(".add-book");
addBook.addEventListener("click", () => {
  bookForm.showModal();
});

let submit = document.querySelector("#submit");
submit.addEventListener("click", (ev) => {
  ev.preventDefault();
  let book = getBookData(author, title, pages);
  myLibrary.push(book);
  createBookCard(book);
  bookForm.close();
});

let main = document.querySelector(".main");

function createBookCard(obj) {
  const div = document.createElement("div");
  div.className = `book-card ${obj.id}`;

  div.innerHTML = `
    <p>Author: ${obj.author}</p>
    <p>Title: ${obj.title}</p>
    <p>Number Of Pages: ${obj.pages}</p>
    <p> State: </p>
    <button class="delete">DELETE</button>
    <button class="read"> Read </button>
  `;

  div.querySelector(".delete").addEventListener("click", () => {
    ids.splice(0, ids.length, obj.id);
    removeCard(obj.id, myLibrary);
    div.remove();
  });

  div.querySelector(".read").addEventListener("click", () => {
    obj.state = "readed";
    div.innerHTML = `
    <p>Author: ${obj.author}</p>
    <p>Title: ${obj.title}</p>
    <p>Number Of Pages: ${obj.pages}</p>
    <p> State: ${obj.state}</p>
    <button class="delete">DELETE</button>
    <button class="read"> Read </button>
  `;
    console.log(obj);
  });

  main.appendChild(div);
}

let ids = [];

let rm = document.querySelector(".delete");

function removeCard(id, arr) {
  const index = arr.findIndex((item) => item.id === id);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

export { addBook };
