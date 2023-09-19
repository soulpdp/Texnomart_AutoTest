class Text_CSS {

     data_text_check_CSS(path, text) {
        cy.get(path).should('have.text', text);
    }



}

export default Text_CSS
