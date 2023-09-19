import Mudatli_Tolov from '../../Path/Mudatli_Tolov'
import Click_VolidationXpath from "../../Volidation/Click_VolidationXpath";
import Click_VolidationCSS from "../../Volidation/Click_VolidationCSS";
import Type_VolidationXpath from '../../Volidation/Type_VolidationXpath'
import Type_VolidationCSS from '../../Volidation/Type_VolidationCSS'
import Value_CSS from '../../Volidation/Value_CSS'
import Value_Xpath from '../../Volidation/Value_Xpath'
import Upload_File from "../../Volidation/Upload_File"
import Time_Volidation from "../../Volidation/Time_Volidation"
import Text_Xpath from "../../Volidation/Text_Xpath"
import Text_CSS from "../../Volidation/Text_CSS"

const to_buy_path = new Mudatli_Tolov()
const click_path_xpath = new Click_VolidationXpath()
const click_path_css = new Click_VolidationCSS()
const type_path_xpath = new Type_VolidationXpath()
const type_path_css = new Type_VolidationCSS
const value_css = new Value_CSS()
const value_xpath = new Value_Xpath()
const upload_file_all = new Upload_File()
const time = new Time_Volidation()
const text_xpath = new Text_Xpath()
const text_css = new Text_CSS()

class Mudatli_tolov_pom_TEXNOMART {
    category() {
        click_path_xpath.data_xpath_click_text_check_with_force(
            to_buy_path.category_chose
        )
    }

    phone_finder() {
        click_path_xpath.data_xpath_click_text_check_with_force(
            to_buy_path.phone_chose
        )
    }

    to_basket() {
        click_path_xpath.data_xpath_click_text_check_with_force(
            to_buy_path.click_basket
        )
    }

    enter_basket() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.click_mudatli_tolov
        )
    }

    final_assertion_check(check_text) {
        click_path_css.data_css_click_text_check_with_multiple(
            to_buy_path.first_assertion, check_text
        )
    }

    ///////////////////////////////////////////////////////////////

    phone_number_write(number) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.phone_number, number
        )
    }

    proof_me() {
        click_path_xpath.data_xpath_click_text_check_with_force(
            to_buy_path.to_be_continue_as_ME
        )
    }

    password_type(password) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.tasdiqlash_place, password
        )
    }

    // click_password() {
    //     click_path_xpath.data_xpath_click_text_check_with_force(
    //         to_buy_path.tasdiqlash_button
    //     )}

    name_assertion(name) {
        value_xpath.data_value_check_Xpath(
            to_buy_path.name_place_assertion, name
        )
    }

    surname_assertion(surname) {
        value_xpath.data_value_check_Xpath(
            to_buy_path.surname_place_assertion, surname
        )
    }

    tolov_turi_click() {
        click_path_css.data_css_click_text_check_with_multiple(
            to_buy_path.mudatli_tolov_turi_button
        )
    }

    texnomart_chose() {
        click_path_xpath.data_xpath_click_text_check_just_click(
            to_buy_path.texnomart_chose
        )
    }

    submit_btn() {
        click_path_xpath.data_xpath_click_text_check_just_click(
            to_buy_path.submit_button
        )
    }

    dokondan_olib_ketish_logic() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.dokondan_olib_ketish
        )
    }

    dokon_tanlash_logic() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.dokon_tanlash
        )
    }



      tolov_uchun_ariza_button_logic() {
        click_path_xpath.data_xpath_click_text_check_just_click(
            to_buy_path.tolov_uchun_ariza_btn2
        )
    }
    upload_photo_1(photo1) {
        upload_file_all.upload_file_xpath(to_buy_path.picture_1, photo1)
    }

    upload_photo_2(photo2) {
        upload_file_all.upload_file_xpath(to_buy_path.picture_2, photo2)
    }


    upload_photo_3(photo3) {
        upload_file_all.upload_file_xpath(to_buy_path.picture_3, photo3)
    }

    file_submit() {
        click_path_xpath.data_xpath_click_text_check_just_click(
            to_buy_path.picture_upload_btn
        )
    }

    wait_logic(time_) {
        time.wait_time(time_)
    }

    ariza_assertion(text) {
        text_xpath.data_text_check_Xpath(
            to_buy_path.check_mudatli_tolov_ariza_assertion, text
        )
    }

    jshshr_logic(text) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.jshshr_path, text
        )
    }

    passport_seria_logic(seria) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.passport_seria_path, seria
        )
    }

    amal_qilish_mudati_click() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.amal_qilish_mudati_xpath
        )
    }

    amal_qilish_mudati_logic(text) {
        type_path_xpath.data_xpath_click_text_check2(
            to_buy_path.amal_qilish_mudati_xpath, text
        )
    }

    name_1(name) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.ism_1, name
        )
    }

    number_1(number) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.tel_1, number
        )
    }

    name_2(name) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.ism_2, name
        )
    }

    number_2(number) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.tel_2, number
        )
    }

    card_body(karta) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.karta, karta
        )
    }

    valid_until(valid_date) {
        type_path_xpath.data_xpath_click_text_check(
            to_buy_path.karta_mudati, valid_date
        )
    }

    haridni_rasmiylashtirish_button() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.haridni_rasmiylashtirish
        )
    }

    final_assertion_raxmat_(word){
        text_xpath.data_text_check_Xpath(
            to_buy_path.final_assertion_raxmat,
            word
        )
    }


}

export default Mudatli_tolov_pom_TEXNOMART