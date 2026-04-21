let myLibrary = [];

class Book {
  constructor(author, title, pages, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
  }
}

function getBookData(elm1, elm2, elm3) {
  let result = new Book(elm1.value, elm2.value, elm3.value);
  return result;
}

export { Book, myLibrary, getBookData };
