const {Builder, By, Key} = require("selenium-webdriver");
//const assert = require("assert");
const { strict, strictEqual } = require("assert");
var should = require("chai").should() // only for should use .should() not needed for assert and expect from chai

//describe block
describe("Input Text Box: Work Experience", function(){

//it block
    it("Objective: Successfully error trigger, \n\tInput type: Alphabate, \n\tAction: Button click", async function(){
        //launch browser
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate to location
        await driver.get("C:/Users/Group010/Desktop/nodepro/htmlfiles/userRegForm.html"); 

        //add a todo //what to do
        await driver.findElement(By.id("workxp")).sendKeys("five", Key.RETURN);
        await driver.findElement(By.id("submitbutt")).click();

        //assert
        let fieldText = await driver.findElement(By.id("errxp")).getText().then(function(value){
            return value
        });

        //assert using node assertions
        //assert.strictEqual(todotext,"Learning selenium");

        //assert using chai assertions
        fieldText.should.equal("Nubers Only");

        //close the browser
        await driver.quit();
    });

    //special character verification
    var specialchar="~`!@#$%^&*()_+=-{}[],./\\;':\"|<>?"
    for(let i=0;i<specialchar.length;i++){
        //it block
        it(`Objective: Successfully error trigger, \nInput type: special character ${specialchar[i]}, \nAction: Button click`, async function(){
            //launch browser
            let driver = await new Builder().forBrowser("chrome").build();
    
            //navigate to location
            await driver.get("C:/Users/Group010/Desktop/nodepro/htmlfiles/userRegForm.html"); 
    
            //add a todo //what to do
            await driver.findElement(By.id("workxp")).sendKeys(`${specialchar[i]}`, Key.RETURN);
            await driver.findElement(By.id("submitbutt")).click();
    
            //assert
            let fieldText = await driver.findElement(By.id("errxp")).getText().then(function(value){
                return value
            });
    
            //assert using node assertions
            //assert.strictEqual(todotext,"Learning selenium");
    
            //assert using chai assertions
            fieldText.should.equal("Numbers Only");
    
            //close the browser
            await driver.quit();
        });
    }


});

//async function example(){


//};
//example() //when using mocha no need to call  by this
