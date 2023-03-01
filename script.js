// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//  UI Constructor

function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //   Create a tr element
  const row = document.createElement("tr");
  //   Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
`;
  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function (message, className) {
  // Create alert element
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  // Insert in DOM
  const container = document.querySelector(".container");
  const form = document.getElementById("book-form");
  container.insertBefore(div, form);

  // Clear after 3 sec
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

//  Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  //    Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //   Instantiate book
  const book = new Book(title, author, isbn);

  //   Instantiate UI
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show alert
    ui.showAlert("Book Added!", "success");

    //   Clear input fields
    ui.clearFields();
  }
});
