class Click_VolidationCSS {

    data_css_click_text_check_with_force(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.get(path).click({ force: true })
                .should('have.text', text);
        } else {
            console.log("No checking for click css");
            cy.get(path).click({ force: true });
        }
    }

    data_css_click_text_check_with_multiple(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.get(path).click()
                .should('have.text', text);
        } else {
            console.log("No checking for click css");
            cy.get(path).click({ multiple: true });
        }
    }

    ////////////////////////////////     Value       //////////////////////

     data_css_click_value_check_with_force(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.get(path).click({ force: true })
                .should('have.value', text);
        } else {
            console.log("No checking for click css");
            cy.get(path).click({ force: true });
        }
    }

    name_assertion(name) {
        value_xpath.data_value_check_Xpath(
            to_buy_path.name_place_assertion, name
        )
    }

    surname_assertion(surname) {
        value_xpath.data_value_check_Xpath(
            to_buy_path.surname_place_assertion, surname
        )
    }

    data_css_click_value_check_with_multiple(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.get(path).click()
                .should('have.value', text);
        } else {
            console.log("No checking for click css");
            cy.get(path).click({ multiple: true });
        }
    }





}

export default Click_VolidationCSS
