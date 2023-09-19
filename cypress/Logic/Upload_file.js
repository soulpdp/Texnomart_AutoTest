describe("Upload File", function () {
    it('Test 1 ', function () {
        cy.xpath("//*[@id=\"1\"]").attachFile("Pictures/Mudatli_tolov/1.jpg");
        cy.xpath("//*[@id=\"2\"]").attachFile("Pictures/Mudatli_tolov/2.jpg");
        cy.xpath("//*[@id=\"3\"]").attachFile("Pictures/Mudatli_tolov/3.jpg");
        cy.xpath("//button[@class='font-medium text-base py-3.5 rounded-lg bg-gold-1 w-full max-w-[320px] block m-auto mt-4']").click()
        cy.wait(5)
    });
})