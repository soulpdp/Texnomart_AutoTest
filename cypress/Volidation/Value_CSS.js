class Value_CSS {

     data_value_check_CSS(path, text) {
        cy.get(path).should('have.value', text);
    }



}

export default Value_CSS
