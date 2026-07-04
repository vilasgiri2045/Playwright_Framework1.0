import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { MyAccount } from '../pages/MyAccount';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config '
import { Homepage } from '../pages/Homepage';


//Load JSON test data logindata.json

const jsonPath="testdata/logindata.json";
//const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);
const jsonTestData=DataProvider.getTestDataFromJson(jsonPath)

for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({page})=>
    {

        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        const homePage = new Homepage(page);
        
        await homePage.clickonmyaccount()
        await homePage.clickonLogin()

        const loginPage = new Loginpage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccount=new MyAccount(page);
            const isLoggedIn=await myAccount.isMyAccountisexists
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getLoginErrorMsg();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}



//Load CSV test data logindata.json

const csvPath = "testdata/logindata.csv";
const csvTestData = DataProvider.getTestDataFromCsv(csvPath);
console.log(csvTestData);

for(const data of csvTestData)
{
   test(`Login Test with CSV Data: ${data.testName} @datadriven`, async({page})=>{

        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        const homePage = new Homepage(page);
        await homePage.clickonmyaccount()
        await homePage.clickonLogin();

        const loginPage = new Loginpage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage=new MyAccount(page);
            const isLoggedIn=await myAccountPage.isMyAccountisexists
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getLoginErrorMsg()
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');    
        }
    })

}

