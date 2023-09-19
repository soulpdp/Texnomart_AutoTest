class Value_CSS {

     data_value_check_Xpath(path, text) {
        cy.xpath(path).should('have.value', text);
    }



}

export default Value_CSS
