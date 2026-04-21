import { getBookData, myLibrary } from "./data";

let author = document.querySelector("#author");
let title = document.querySelector("#title");
let pages = document.querySelector("#pages");
let bookForm = document.querySelector(".book-form");

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
  let div = document.createElement("div");
  div.classList.add("book-card");
  div.classList.add(`${obj.id}`);
  let author = document.createElement("p");
  author.textContent = `Author: ${obj.author}`;
  let title = document.createElement("p");
  title.textContent = `Title: ${obj.title}`;
  let pages = document.createElement("p");
  pages.textContent = `Number Of Pages: ${obj.pages}`;
  let rm = document.createElement("button");
  rm.textContent = "DELETE";
  rm.classList.add("delete");
  let arr = [author, title, pages, rm];
  rm.addEventListener("click", () => {
    id.splice(0);
    id.push(obj.id);
    removeCard(obj.id, myLibrary);
    let div = document.querySelector(`[class*="${obj.id}"]`);
    main.removeChild(div);
  });
  arr.forEach((val) => {
    div.appendChild(val);
  });
  main.appendChild(div);
}

let id = [];

let rm = document.querySelector(".delete");

function removeCard(id, arr) {
  for (let item of arr) {
    if (item.id == id) {
      let index = arr.indexOf(item);

      arr.splice(index, 1);
    }
  }
}

export { addBook };
