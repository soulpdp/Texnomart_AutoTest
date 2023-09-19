class Type_VolidationXpath {

    data_xpath_click_text_check(path, value, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).type(value)
                .should('have.text', text);
        } else {
            console.log("No checking for type xpath ");
            cy.xpath(path).clear().type(value);
        }
    }

      data_xpath_click_value_check(path, value, text) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.xpath(path).type(value)
                .should('have.value', text);
        } else {
            console.log("No checking for type xpath ");
            cy.xpath(path).type(value);
        }
    }

      data_xpath_click_text_check2(path, value, text) {
        if (text !== undefined && text !== null && text !== "")
        {
            cy.xpath(path).type(value).type("{enter}")
                .should('have.text', text);
        } else {
            console.log("No checking for type xpath ");
            cy.xpath(path).clear().type(value).type('{enter}')
        }
    }




}

export default Type_VolidationXpath
