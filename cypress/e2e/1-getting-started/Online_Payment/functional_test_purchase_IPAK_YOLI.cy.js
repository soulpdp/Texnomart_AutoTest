const run_the_buy_Ipak_Yoli = require('../../../Run/Online_Paymets/harid_qilish_menu_Ipak_Yoli');

before(() => {
    cy.visit("https://texnomart.uz/");
    cy.viewport(1920, 1080);
});

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://texnomart.uz/");
});

describe("Logic of Purchase", function () {
    it('Test 1', function () {

        Cypress.on("uncaught:exception", (err, runnable) => {
            console.error("Uncaught exception:", err.message);
            return false;
        });

        run_the_buy_Ipak_Yoli();
    });
});
