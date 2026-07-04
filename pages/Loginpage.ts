
import{Page,Locator} from '@playwright/test'

export class Loginpage
{
    private readonly page:Page
    private readonly emailAddress:Locator
    private readonly loginPassword:Locator
    private readonly loginbutton:Locator
     private readonly errorMessage:Locator

     constructor(page:Page)
     {

        this.page=page;
       this.emailAddress = page.locator('#input-email')
       this.loginPassword = page.locator('#input-password')
       this.loginbutton= page.locator("input[value='Login']")
       this.errorMessage=page.getByText(' Warning: No match for E-Mail Address and/or Password.')



     }
     

     async setEmailaddress(email:string)
     {
      await  this.emailAddress.fill(email)
     }

      async setPassword(password:string)
     {
      await  this.loginPassword.fill(password)
     }

  async clickLogin()
     {
      await  this.loginbutton.click()
     }

     async login(email:string, password:string)
     {
      await  this.setEmailaddress(email)
      await  this.setPassword(password)
      await  this.clickLogin()
     }
async getLoginErrorMsg()
{
   return (this.errorMessage.textContent());
}



}        