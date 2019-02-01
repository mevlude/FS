//pages

var home = require("../Pages/home.page.js");
var testData = require("../TestData/data.json");

//DB Connection

var pgp= require('pg-promise')(/*options*/);

describe('Login with DB connection', () => {
    var connectionString ={
        host: 'room-reservation-qa3.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
        port:5432,
        database:'room_reservation_qa3',
        user:'qa_user',
        password:'Cybertek11!'
    }

    var db=pgp(connectionString);
    var arr=[];
    var username='';
    var pass='';

    //pre-test trials
    //show all the users
    // xit('test case 3- login', () => {
        
    
    //     db.any(`select * from users`)
    //         .then((result) => {
    //             arr=result
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         }) 
    //         .then(() => {
    //             //All our automation code will be here
    //             console.log(arr)
    //         })

    //     //show Email, Firstname, Lastname and Role

    //     db.any(`select email, firstname,lastname,role,name
    //     from users inner join team
    //     on users.team_id=team.id;`)
    //     .then((result) => {
    //         arr=result
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     }) 
    //     .then(() => {
    //         //All our automation code will be here
    //         console.log(arr)
    //     })
    // });

    
    it('test case -3 - login to the website with DB connection', () => {
        //fetch the data from database

        db.any(`select firstname,lastname,email 
                from users
                 where email ='efewtrell8c@craigslist.org'`)
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