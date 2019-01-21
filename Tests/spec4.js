//pages

var home = require("../Pages/home.page.js");
//var testData = require("../TestData/data.json");


//DB Connection

var pgp= require('pg-promise')(/*options*/);
var connectionString = require('../TestData/dbConnection.js');
var queries = require('../TestData/queries.js')

describe('Login with DB connection', () => {
    

    var db=pgp(connectionString);
    var arr=[];
    var username='';
    var pass='';


    
    it('test case -3 - login to the website with DB connection', () => {
        //fetch the data from database

        db.any(queries.q1)
         .then((result) => {
             //console.log(result.length)
             username=result[0].email;
            //console.log(username)
            pass = result[0].firstname.toLowerCase()+result[0].lastname.toLowerCase()
            console.log(pass)
         }).catch((err) => {
             console.log(err)
         }) .then((result) => {
             //all UI automation code 

            browser.get('https://cybertek-reservation-qa3.herokuapp.com/')
            browser.sleep(2000)
            home.email.click().sendKeys(username)
            home.password.click().sendKeys(pass)
            home.signinButton.click()
    
            expect(home.title.getText() ).toEqual("VA")




         })



    });

});