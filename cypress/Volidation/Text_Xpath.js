class Text_Xpath {
     data_text_check_Xpath(path, text) {
        cy.xpath(path).should('have.text', text);
    }

}

export default Text_Xpath
