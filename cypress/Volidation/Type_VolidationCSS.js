class Type_VolidationCSS {

    data_css_click_text_check(path, text,value) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.get(path).type(value)
                .should('have.text', text);
        } else {
            console.log("No checking for type css");
            cy.get(path).type(value);
        }
    }

    data_css_click_value_check(path, text,value) {
        if (text !== undefined && text !== null && text !== ""
        ) {
            cy.get(path).type(value)
                .should('have.value', text);
        } else {
            console.log("No checking for type css");
            cy.get(path).type(value);
        }
    }




}

export default Type_VolidationCSS
