import Mudatli_tolov_pom_TEXNOMART from "../../POM/Credit/Mudatli_tolov_pom_TEXNOMART";
import 'cypress-file-upload'
import {getFormattedDate} from '../../Logic/Date'
import Harid_qilish_pom_CLICK from "../../POM/Online_Payments/Harid_qilish_pom_CLICK";
import Mudatli_tolov_pom_Ipak_Yoli from "../../POM/Online_Payments/Harid_qilish_pom_Ipak_Yoli";

function run_the_buy_Ipak_Yoli() {
    cy.fixture("mudatli_tolov_assertion.json").then((data) => {

        const credit = new Mudatli_tolov_pom_Ipak_Yoli();
        const formattedDate = getFormattedDate();
        let word1 = "//div[@id='product-link104915']//div[@class='d-flex align-center " +
            "justify-between w-full']//div[@class='product-price__current']"
        credit.category();
        credit.phone_finder();

        /////////////////////////////////////////////////////////
        cy.xpath("//div[@id='product-link104915']//div[@class='d-flex align-center justify-between w-full']//div[@class='product-price__current']")
            .invoke('text')
            .then((text) => {
                cy.log(`The text from the element is: ${text}`);

                /////////////////////////////////////////////////////////
                credit.to_basket();
                credit.enter_basket();
                /////////////////////////////////////////////////////////


                cy.xpath("//div[@class='font-bold tracking-[.4px]']")
                    .invoke('text')
                    .then((text2) => {
                        cy.log(`The text from the element is: ${text2}`);

                        // Use a Cypress command to assert the text
                        expect(parseInt(text)).to.equal(parseInt(text2));
                    });
            });
        /////////////////////////////////////////////////////////


        credit.final_assertion_check(data.check_1);
        credit.phone_number_write(data.mobile_number);
        credit.proof_me();
        credit.password_type(data.password);
        credit.name_assertion(data.name);
        credit.surname_assertion(data.surname);
        credit.tolov_turi_btn()
        credit.tolov_turi_ipak_yoli();
        credit.tolov_turi_click_submit();
        credit.dokon_tanlash_button();
        credit.dokon_tanlash_chose();
        credit.final_submit();

        // credit.click_assertion(data.final_check);

    });
}

module.exports = run_the_buy_Ipak_Yoli;
