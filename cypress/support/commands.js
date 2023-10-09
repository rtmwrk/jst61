/** Command - login:
 * - @login - user login for service;
 * - @password - user password for service
 */
Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  if (login !== "") {
    cy.get("#mail").type(login);
  }
  if (password !== "") {
    cy.get("#pass").type(password);
  }
  cy.contains("Submit").click();
});

/** Command - logout
 */
Cypress.Commands.add("logout", () => {
  cy.contains("Log out").click();
});

/** Command - addBook:
 * - @title - title book;
 * - @description - description book;
 * - @cover - cover pictures book;
 * - @file - text file book;
 * - @authors - book authors
 */
Cypress.Commands.add(
  "addBook",
  (title, description, cover, file, authors, favorite) => {
    cy.get("#title").type(title);
    cy.get("#description").type(description);
    cy.get("#fileCover").selectFile(cover);
    cy.get("#fileBook").selectFile(file);
    cy.get("#authors").type(authors);
    if (favorite) {
      cy.get("#favorite").check();
    }
    cy.contains("Submit").click();
  }
);

/** Command - deleteFromFavorite
 */
Cypress.Commands.add("deleteFromFavorite", () => {
  // Delete first book from favorite
  cy.contains("Delete from favorite").click();
});
