class Upload_File {

    upload_file_xpath(path, file) {
        cy.xpath(path).attachFile(file);
    }

    upload_file_css(path, file) {
        cy.xpath(path).attachFile(file);
    }


}

export default Upload_File
