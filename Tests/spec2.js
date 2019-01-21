//pages

var home = require("../Pages/home.page.js");
var testData = require("../TestData/data.json")





describe('POM and TestData', () => {
    it('test case 2 login to website with POM and testdata', () => {

        browser.get('https://cybertek-reservation-qa.herokuapp.com/')
        browser.sleep(2000)
        home.email.click().sendKeys(testData.email)

        home.password.click().sendKeys(testData.password)

        home.signinButton.click()

        expect(home.title.getText() ).toEqual("VA")
    });
});