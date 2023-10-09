const { getRandomBook } = require("../support/data.js");

const pathImg = "./cypress/support/img/";
const pathFile = "./cypress/support/txt/";

// --- Test for favorite page ---
describe("Add/Delete book actions", () => {
  beforeEach(() => {
    // Log in service
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  afterEach(() => {
    // Log out service
    cy.logout();
  });

  // Add new book without add to favorite - success. Functional positive test
  it("Test # 5. Should successfully add new book without add to favorite", () => {
    // Add new book
    let book = getRandomBook();
    // Create unique title book: title + timestamp
    let title = book.title + "_" + Math.ceil(Date.now() / 1000).toString();
    cy.contains("Add new").click();
    cy.addBook(
      title,
      book.description,
      pathImg + book.cover,
      pathFile + book.file,
      book.authors,
      false
    );
    cy.contains(title).should("be.visible");
  });

  // Add new book with add to favorite - success. Functional positive test
  it("Test # 6. Should successfully add new book with add to favorite", () => {
    // Add new book
    let book = getRandomBook();
    let title = book.title + "_" + Math.ceil(Date.now() / 1000).toString();
    cy.contains("Add new").click();
    cy.addBook(
      title,
      book.description,
      pathImg + book.cover,
      pathFile + book.file,
      book.authors,
      true
    );
    cy.contains(title).should("be.visible");
  });

  // Delete book from favorite - success. Functional positive test
  it("Test # 7. Should successfully delete book from favorite", () => {
    // Add new book to favorite for deleting
    let book = getRandomBook();
    let title = book.title + "_" + Math.ceil(Date.now() / 1000).toString();
    cy.contains("Add new").click();
    cy.addBook(
      title,
      book.description,
      pathImg + book.cover,
      pathFile + book.file,
      book.authors,
      true
    );

    // Delete added book from favorite
    // Open favorite page
    cy.contains("Favorite").click();
    cy.contains(title).should("be.visible");
    cy.deleteFromFavorite();
    cy.get(".card-title").then(($arrAfter) => {
      expect($arrAfter[0].innerText).to.not.equal(title);
    });
  });
});
