import Mudatli_Tolov from '../Path/Mudatli_Tolov'
import Click_VolidationXpath from "../Volidation/Click_VolidationXpath";
import Click_VolidationCSS from "../Volidation/Click_VolidationCSS";
import Type_VolidationXpath from '../Volidation/Type_VolidationXpath'
import Type_VolidationCSS from '../Volidation/Type_VolidationCSS'
import Value_CSS from '../Volidation/Value_CSS'
import Value_Xpath from '../Volidation/Value_Xpath'
import Upload_File from "../Volidation/Upload_File"
import Time_Volidation from "../Volidation/Time_Volidation"
import Text_Xpath from "../Volidation/Text_Xpath"
import Text_CSS from "../Volidation/Text_CSS"
import Harid_qilish_path from "../Path/Harid_qilish_path";

const to_buy_path = new Harid_qilish_path()
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

class Mudatli_tolov_pom {
    category() {
        click_path_xpath.data_xpath_click_text_check_with_force(
            to_buy_path.category_chose
        )
    }

    phone_finder() {
        click_path_xpath.data_xpath_click_text_check_with_force(
            to_buy_path.product_chose
        )
    }


    phone_price_validation(text){
        text_xpath.data_text_check_Xpath(
            to_buy_path.product_chose,text
        )
    }


    to_basket() {
        click_path_xpath.data_xpath_click_text_check_with_multiple(
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

    tolov_turi_btn() {
        click_path_css.data_css_click_text_check_with_multiple(
            to_buy_path.tolov_turi_button
        )
    }

    tolov_turi_payme() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.tolov_turi_button_payme
        )
    }

    tolov_turi_click_submit() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.tolov_turi_button_submit
        )
    }

    dokon_tanlash_button() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.dokon_tanlash_btn
        )
    }

    dokon_tanlash_chose() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.dokon_tanlash_choose
        )
    }

    final_submit() {
        click_path_xpath.data_xpath_click_value_check_just_click(
            to_buy_path.submit
        )
    }

    click_assertion(text) {
        text_xpath.data_text_check_Xpath(
            to_buy_path.final_assertion2,
            text
        )
    }

}

export default Mudatli_tolov_pom