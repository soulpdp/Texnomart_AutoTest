const run_the_buy = require('../../Run/Online_Paymets/harid_qilish_menu_CLICK');
const run_all_logic = require ('../../Run/harid_vs_cridit')

before(() => {
    cy.visit("https://texnomart.uz/");
    cy.viewport(1920, 1080);
});

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    // cy.visit("https://texnomart.uz/");
});

describe("Logic of Purchase", function () {
    it('Test 1', function () {

        Cypress.on("uncaught:exception", (err, runnable) => {
            console.error("Uncaught exception:", err.message);
            return false;
        });

        run_all_logic()
    });
});
