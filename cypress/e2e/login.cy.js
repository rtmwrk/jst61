// --- Test for login page ---

// Open main page - success. Functional positive test
it("Test # 1. Should successfully open main page", () => {
  cy.visit("/");
  cy.contains("Books list");
});

describe("Login actions", () => {
  beforeEach(() => {
    // Log in service
    cy.visit("/");
  });

  // Login service - success. Functional positive test
  it("Test # 2. Should successfully login", () => {
    // Log in
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
    // Log out service
    cy.logout();
  });

  // Attempt login with empty login - fail. Functional negative test
  it("Test # 3. Should fail with empty login", () => {
    // Log in attempt
    cy.login(" ", "test");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  // Attempt login with empty pass - fail. Functional negative test
  it("Test # 4. Should fail with empty pass", () => {
    // Log in attempt
    cy.login("test@test.com", "");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
