
import {test,expect} from '@playwright/test'
//import { Homepage } from '../pages/Homepage'
import { Homepage } from '../pages/Homepage'
import{Register} from '../pages/Register'
import { RandomDataUtil } from '../utils/randomdatagenerator'
//import { Dataprovider } from '../utils/dataprovider'
import { TestConfig } from '../test.config '


let homepage:Homepage;
let register:Register;



test.beforeEach(async({page})=>
{
const testconfig= new TestConfig()
  await page.goto(testconfig.appUrl) 
     register= new Register(page)
     homepage= new Homepage(page)
})

test.afterEach(async({page})=>
{

await page.waitForTimeout(3000)
await page.close();

})

test('User registration test', async({})=>
{

    //navigate to url

 await  homepage.clickonmyaccount();
 await homepage.clickOnRegisterlink();


await register.setFirstname(RandomDataUtil.getFirstname())
await register.setLastName(RandomDataUtil.getlastname())
await register.setEmailAddress(RandomDataUtil.getEmail())
await register.setTelephone(RandomDataUtil.getPhonenumber())

const password=await  RandomDataUtil.getPassword();
await register.setPassword(password);
await register.setConfirmpassword(password);
await register.clickonPrivacy();
await register.clickOnContine();

const confimmsg= await register.gettext();
await expect(confimmsg).toContain('Your Account Has Been Created!')

console.log('script done...')


})