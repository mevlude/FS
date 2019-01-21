describe('working on the web page', () => {
    it('test case -1 - login to page (hard coded)', () => {
        browser.get('https://cybertek-reservation-qa.herokuapp.com/')
        browser.sleep(3000)
       element(by.name('email'))
            .click().sendKeys('efewtrell8c@craigslist.org')

        element(by.name('password'))
            .click().sendKeys('jamesmay')

        $('.control .button.is-dark').click()

        expect($("app-hero-body .title").getText() ).toEqual("VA")
    });


});