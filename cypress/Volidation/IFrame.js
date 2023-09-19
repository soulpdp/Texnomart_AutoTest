class IFrame {
    iframe_interact(path,){
        cy.iframe().find('input').clear().type('Text inside iframe');

    }
}