class Mudatli_Tolov {
    category_chose = "//div[@class='text-sm text-center c-333 special-catalog__title'][contains(text(),'Смартфонлар')]"
    phone_chose = "//div[@id='product-link96473']//div[@class='product-bottom__right flex flex-col items-start justify-between']//button[@aria-label='basket']//*[name()='svg']"
    click_basket = "//*[name()='path' and contains(@d,'M8.12503 2')]"
    click_mudatli_tolov = "//button[@class='text-center text-base py-4 px-1 w-full font-medium tracking-[.2px] bg-gold-1 rounded-xl cursor-pointer']"
    first_assertion = ".checkout__title.f-20.mb-0.c-373.w-bold.f-24-md" //Харидни расмийлаштириш
    phone_number = "//input[@placeholder='+998']"
    to_be_continue_as_ME = "//button[@class='btn-13-gold mb-5']"
    tasdiqlash_place = "//input[@placeholder=' ']"
    tasdiqlash_button = "//button[@class='btn-gold w-100 mt-2']"
    name_place_assertion = "//div[@class='personal__label form-item']//input[@placeholder='Исм']" // sardor
    surname_place_assertion = "//input[@placeholder='Фамилия']"  // Tursunkhujaev
    mudatli_tolov_turi_button = ".flex-nowrap > :nth-child(2)" // css
    texnomart_chose = "//div[5]//div[1]//label[1]//span[1]" //xpath
    tehnomart_chose = "//span[@class='new-installment-label__active check-active']" //xpath
    submit_button = "//button[@class='w-full 1024:w-auto btn bg-gold-1 rounded-lg py-[11px] px-5 f-16 1024:mt-9 mt-5 1024:mb-0 mb-4 font-medium leading-6']" //xpath
    dokondan_olib_ketish = "//div[@class='receipt-options selection-city']//label[@class='selection-city__item']//div[1]" // xpath
    dokon_tanlash = "/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/span[1]" // xpath
    tolov_uchun_ariza_btn = "//button[@class='price__btn w-full text-base font-medium bg-gold-1 text-center rounded-lg py-3 mb-4 cursor-pointer']" //xpath
    tolov_uchun_ariza_btn2 = "//div[@class='checkout__left']//button[@class='price__btn w-full text-base font-medium bg-gold-1 text-center rounded-lg py-3 mb-4 cursor-pointer'][contains(text(),'Тўлов учун аризани тўлдиринг')]" //xpath
    picture_1 = '//*[@id="1"]'
    picture_2 = '//*[@id=\"2\"]'
    picture_3 = '//*[@id=\"3\"]'
    picture_upload_btn = "//button[@class='font-medium text-base py-3.5 rounded-lg bg-gold-1 w-full max-w-[320px] block m-auto mt-4']"
    check_mudatli_tolov_ariza_assertion = "//div[@class='text-xl mb-5 font-medium text-center 768:mb-7']"
    jshshr_path = "//*[@id=\"texnomart-form\"]/div/div/div/div[4]/div[2]/div[1]/input"
    passport_seria_path = "//input[@placeholder='AA9999999']"
    amal_qilish_mudati_xpath = "//*[@id=\"texnomart-form\"]/div/div/div/div[4]/div[3]/div[2]/div[1]/div/div/input"
    ism_1 = "//div//div//div//div//div//div//div//div//div[5]//div[1]//div[1]//input[1]"
    tel_1 = "//*[@id=\"texnomart-form\"]/div/div/div/div[4]/div[5]/div[2]/div[1]/input"
    ism_2 = "//*[@id=\"texnomart-form\"]/div/div/div/div[4]/div[7]/div[1]/div[1]/input"
    tel_2 = "/html/body/div[3]/div/div/div[2]/div[5]/div[2]/div/div/div/div[4]/div[7]/div[2]/div[1]/input"
    karta = "//input[@placeholder='0000 0000 0000 0000']"
    karta_mudati = "//input[@placeholder='ММ/ГГ']"
    haridni_rasmiylashtirish = "//button[@class='font-medium text-base py-3.5 rounded-lg bg-gold-1 w-full max-w-[320px] block m-auto mb-6 mt-4']"
    final_assertion_raxmat = "//div[@class='font-medium text-xl mb-1']" //xpath
}

export default Mudatli_Tolov;