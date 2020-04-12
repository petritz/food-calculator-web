// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});

describe("Product Page Test", () => {
  before(() => {
    cy.server();
    cy.route(Cypress.env("API_BASE_URL") + "/products/").as("getProducts");

    cy.visit("/#/products");
    cy.wait("@getProducts");
  });

  it("Changes the product", () => {
    const select = cy.get("[data-cy='select-product']");
    select.click();
    select.type("{downarrow}");
    select.type("{enter}");
    cy.get("[data-cy='product-detail-table']").should("visible");
  });

  it("Changes to something specific", () => {
    const select = cy.get("[data-cy='select-product']");
    select.click();
    cy.get("[data-cy='select-product'] input").type(
      "Ja! Natürlich Buttermilch"
    );
    select.type("{enter}");
    cy.get("[data-cy='product-detail-name']").contains(
      "Ja! Natürlich Buttermilch"
    );
  });

  it("Clears selection", () => {
    cy.get("[data-cy='select-product'] button.vs__clear").click();
    cy.get("[data-cy='product-detail-table']").should("not.visible");
  });
});
