describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should contain a title", () => {
    cy.get("h1").should("have.class", "title").contains("Hello World");
  });
});
