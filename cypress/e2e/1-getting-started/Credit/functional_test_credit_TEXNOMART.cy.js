const run_all_logic_TEXNOMART = require('../../../Run/Credit/mudatli_tolov_menu_TEXNOMART');

before(() => {
    cy.visit("https://texnomart.uz/");
    cy.viewport(1920, 1080);
});

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://texnomart.uz/"); // You can clear cache as part of the regular visit
});

describe("Logic of Purchase", function () {
    it('Test 1', function () {
        // Cypress.on("uncaught:exception") handler can be used cautiously
        Cypress.on("uncaught:exception", (err, runnable) => {
            console.error("Uncaught exception:", err.message);
            return false;
        });

        run_all_logic_TEXNOMART();
    });
});
