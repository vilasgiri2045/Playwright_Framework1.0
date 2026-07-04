
import { th, tr } from '@faker-js/faker';
import{test,expect,Locator, Page} from '@playwright/test';

export class Homepage
{
   
    private readonly page:Page;
    //locator
      private readonly myAccountlink:Locator;
       private readonly  registerlink:Locator; 
       private readonly login:Locator;
       private readonly searchobx:Locator;
       private readonly searchbutton:Locator;
    //constructor
      constructor(page:Page)
      {
       this.page=page;
       this.myAccountlink=page.locator("//span[text()='My Account']");
       this.registerlink= page.getByRole('link',{name:'Register'});
        this.login   =  page.getByRole('link',{name:'Login'});
        this.searchobx= page.locator("input[name='search']");
        this.searchbutton= page.locator("button[class='btn btn-default btn-lg']")

      }
    //action methods
        async ishomepage()
        {
           let title:string= await this.page.title()
           if(title)
           {
            return true
           }
           return false
        }
  async clickonmyaccount()
  {
    try{
       await this.myAccountlink.click();
    }
    catch(error)
    {
        console.log('error is occured...')
        throw error;
    }
  }


  async clickOnRegisterlink()
  {
    try
    {
      await  this.registerlink.click();
    }
    catch(error)
    {
        console.log('error is occcured');
        throw error;
    }
  }
  async enterproductname(phonename:string)
  {
try
{
    await this.searchobx.fill('Iphone')
}
catch(error)
{
    console.log('error is occured')
    throw error;
}

  }

  async clicksearchbutton()
  {
try
{
    await this.searchbutton.click();

}
catch(error)
{
    console.log('error is occured')
}
    
  }

   async clickonLogin()
  {
try
{
    await this.login.click();

}
catch(error)
{
    console.log('error is occured')
}
    
  }
    
}