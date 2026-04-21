let myLibrary = [];

class Book {
  constructor(author, title, pages, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
  }
}

export { Book, myLibrary };
