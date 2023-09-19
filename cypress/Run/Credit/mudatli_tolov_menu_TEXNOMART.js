import Mudatli_tolov_pom_TEXNOMART from "../../POM/Credit/Mudatli_tolov_pom_TEXNOMART";
import 'cypress-file-upload'
import {getFormattedDate} from '../../Logic/Date'

function run_all_logic_TEXNOMART() {
    cy.fixture("mudatli_tolov_assertion.json").then((data) => {
        const credit = new Mudatli_tolov_pom_TEXNOMART();
        const formattedDate = getFormattedDate();
        credit.category();
        credit.phone_finder();
        credit.to_basket();
        credit.enter_basket();
        credit.final_assertion_check(data.check_1);
        credit.phone_number_write(data.mobile_number);
        credit.wait_logic(2)
        credit.proof_me();
        credit.wait_logic(2)
        credit.password_type(data.password);
        // credit.click_password();
        credit.name_assertion(data.name);
        credit.surname_assertion(data.surname);
        credit.tolov_turi_click();
        credit.texnomart_chose();
        credit.submit_btn();
        credit.dokondan_olib_ketish_logic();
        credit.dokon_tanlash_logic();
        credit.tolov_uchun_ariza_button_logic();
        credit.upload_photo_1("Pictures/Mudatli_tolov/1.jpg")
        credit.upload_photo_2("Pictures/Mudatli_tolov/2.jpg")
        credit.upload_photo_3("Pictures/Mudatli_tolov/3.jpg")
        credit.file_submit()
        credit.wait_logic(2)
        credit.ariza_assertion(data.check_2)
        credit.jshshr_logic(data.jshshr)
        credit.passport_seria_logic(data.passport_seria)
        credit.amal_qilish_mudati_click()
        credit.amal_qilish_mudati_logic(formattedDate)

        credit.name_1(data.name__1)
        credit.number_1(data.tel__1)
        credit.name_2(data.name__2)
        credit.number_2(data.tel__2)
        credit.card_body(data.card)
        credit.valid_until(data.valid)
        credit.haridni_rasmiylashtirish_button()
        credit.final_assertion_raxmat_(data.check_3)
    });
}

module.exports = run_all_logic_TEXNOMART;
