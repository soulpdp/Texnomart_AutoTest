class Mudatli_Tolov {
    category_chose = "//div[@class='header-bottom']//li[6]//a[1]"
    product_chose = "//div[@id='product-link104915']//button[@aria-label='basket']//*[name()='svg']"
    click_basket = "//*[name()='path' and contains(@d,'M8.12503 2')]"
    click_mudatli_tolov = "//button[@class='text-center text-base py-4 px-1 w-full font-medium tracking-[.2px] bg-gold-1 rounded-xl cursor-pointer']"
    first_assertion = ".checkout__title.f-20.mb-0.c-373.w-bold.f-24-md" //Харидни расмийлаштириш
    phone_number = "//input[@placeholder='+998']"
    to_be_continue_as_ME = "//button[@class='btn-13-gold mb-5']"
    tasdiqlash_place = "//input[@placeholder=' ']"
    tasdiqlash_button = "//button[@class='btn-gold w-100 mt-2']"
    name_place_assertion = "//div[@class='personal__label form-item']//input[@placeholder='Исм']" // sardor
    surname_place_assertion = "//input[@placeholder='Фамилия']"  // Tursunkhujaev
    tolov_turi_button = "div[class='w-[120px] shadow-gray-border-1 rounded-xl py-2.5 px-4 cursor-pointer mr-3 !shadow-gold-border-2'] div:nth-child(2)" // css
    tolov_turi_button_click = "//*[@id=\"payment-type\"]/div/div/div/div[2]/div[5]/div[1]/div[1]/label/span" // xpath
    tolov_turi_button_payme = "//div//div//div//div//div//div//div//div//div//div//div[3]//div[1]//div[1]//label[1]//span[1]" // xpath
    tolov_turi_button_ipak_yoli = "//body/div/div/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div[1]/label[1]/span[1]" // xpath
    tolov_turi_button_mir = "//div[4]//div[1]//div[1]//label[1]//span[1]" // xpath
    tolov_turi_button_submit = "//button[@class='btn-13-gold']" // xpath
    dokon_tanlash_btn = "//div[@class='receipt-options selection-city']//label[@class='selection-city__item']//div[@class='selection-city__active']"
    dokon_tanlash_choose = "//body//div//div[@name='installment-type']//div//div//div//div//div//div//div[1]//div[2]//span[1]"
    submit = "//div[@class='checkout__left']//button[@class='price__btn w-full text-base font-medium bg-gold-1 text-center rounded-lg py-3 mb-4 cursor-pointer'][contains(text(),'Харидни расмийлаштириш')]"
    final_assertion2 = "//div[normalize-space()='texnomart.uz']"
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    check_2 = "//div[@id='product-link104915']//div[@class='d-flex align-center justify-between w-full']//div[@class='product-price__current']"
    check_3 = "//div[@class='font-bold tracking-[.4px]']"
}

export default Mudatli_Tolov;