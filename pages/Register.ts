

import{test,expect,Locator, Page} from '@playwright/test';

export class Register
{
    private page:Page;
    private readonly firstname:Locator;
   
    private readonly lastname:Locator;
    
    private readonly email:Locator;
    private readonly telephone:Locator;
    
    private readonly password:Locator;
    
    private readonly confirmapassword:Locator;
    
    private readonly privacypolicy:Locator;
    private readonly continue:Locator;
    private readonly accountsetuptext:Locator;

    constructor(page:Page)
    {
       this.page=page;

       this.firstname=  page.locator('#input-firstname');
       this.lastname= page.locator('#input-lastname');
       this.email= page.locator('#input-email')
       this.telephone=page.locator('#input-telephone')
       this.password=page.locator('#input-password')
       this.confirmapassword=page.locator('#input-confirm')
       this.privacypolicy= page.locator("input[name='agree']")
       this.continue= page.locator("input[value='Continue']")
       this.accountsetuptext= page.getByText('Your Account Has Been Created!')
    }

    async setFirstname(fname:string):Promise<void>
    {
       await this.firstname.fill(fname);
    }

    async setLastName(lname:string):Promise<void>
    {
       await this.lastname.fill(lname);
    }

    async setEmailAddress(email:string):Promise<void>
    {
       await this.email.fill(email);
    }

    async setTelephone(telephone:string):Promise<void>
    {
       await this.telephone.fill(telephone);
    }

    async setPassword(password:string):Promise<void>
    {
       await this.password.fill(password);
    }

    async setConfirmpassword(confirmapassword:string):Promise<void>
    {
       await this.confirmapassword.fill(confirmapassword);
    }
   async clickonPrivacy():Promise<void>
    {
       await this.privacypolicy.click();
    }

async clickOnContine():Promise<void>
    {
       await this.continue.click();
    }

async gettext():Promise<string>
    {
      return await this.accountsetuptext.textContent() ?? ' ';
    }

}