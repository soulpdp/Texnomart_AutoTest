class Click_VolidationXpath {
    data_xpath_click_text_check_with_force(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).click({force: true})
                .should('have.text', text);
        } else {
            console.log("No checking for click xpath 1");
            cy.xpath(path).click({force: true});
        }
    }

     data_xpath_click_text_check_with_multiple(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).click({multiple: true})
                .should('have.text', text);
        } else {
            console.log("No checking for click xpath 2");
            cy.xpath(path).click({multiple: true});
        }
    }

     data_xpath_click_text_check_just_click(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).click()
                .should('have.text', text);
        } else {
            console.log("No checking for click xpath 3");
            cy.xpath(path).click();
        }
    }

    ///////////////////////////////// Value ///////////////////////////////
     data_xpath_click_value_check_with_force(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).click({force: true})
                .should('have.value', text);
        } else {
            console.log("No checking for click xpath 4");
            cy.xpath(path).click({force: true});
        }
    }

     data_xpath_click_value_check_with_multiple(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).click({multiple: true})
                .should('have.value', text);
        } else {
            console.log("No checking for click xpath 5");
            cy.xpath(path).click({multiple: true});
        }
    }

     data_xpath_click_value_check_just_click(path, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).click()
                .should('have.value', text);
        } else {
            console.log("No checking for click xpath 6");
            cy.xpath(path).click();
        }
    }



}

export default Click_VolidationXpath
