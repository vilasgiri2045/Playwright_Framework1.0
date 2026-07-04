
import { Homepage } from "../pages/Homepage";
import { Loginpage } from "../pages/Loginpage";
import { MyAccount } from "../pages/MyAccount";
import { TestConfig } from "../test.config ";
import{test,expect} from '@playwright/test'

let homepage:Homepage;
let loginpage:Loginpage;
let myaccount:MyAccount;
let testconfig:TestConfig;

test.beforeEach(async({page})=>
{
 testconfig= new TestConfig()
  await page.goto(testconfig.appUrl) 
    loginpage= new Loginpage(page)
    myaccount= new MyAccount(page)
    homepage= new Homepage(page)
})

test.afterEach(async({page})=>
{

await page.waitForTimeout(3000)
await page.close();

})

test('User login test @sanity', async({})=>
{
    await homepage.clickonmyaccount();
    await  homepage.clickonLogin();
   await  loginpage.setEmailaddress(testconfig.email);
    await  loginpage.setPassword(testconfig.password)
    await loginpage.clickLogin();

 //  await loginpage.login(testconfig.email, testconfig.password)

 // verify successfull login
 const islogged= await myaccount.isMyAccountisexists()
 await expect(islogged).toBeTruthy();

console.log('script done...')
})

