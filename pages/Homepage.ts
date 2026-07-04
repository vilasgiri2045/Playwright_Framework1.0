import { Locator, Page } from '@playwright/test';

export class Homepage
{
   
    private readonly page: Page;
    //locator
      private readonly myAccountlink: Locator;
       private readonly registerlink: Locator; 
       private readonly login: Locator;
       private readonly searchBox: Locator;
       private readonly searchbutton: Locator;
    //constructor
      constructor(page: Page)
      {
       this.page = page;
       this.myAccountlink = page.getByText('My Account', { exact: true });
       this.registerlink = page.getByRole('link', { name: 'Register' });
        this.login   =  page.getByRole('link', { name: 'Login' });
        this.searchBox = page.locator("input[name='search']");
        this.searchbutton = page.locator("button[class='btn btn-default btn-lg']")

      }
    //action methods
        async ishomepage()
        {
           const title: string = await this.page.title();
           return Boolean(title);
        }
  async clickonmyaccount()
  {
    try{
       // wait for the element to be visible and stable before interacting
       await this.myAccountlink.waitFor({ state: 'visible', timeout: 10000 });
       await this.myAccountlink.click({ timeout: 10000 });
    }
    catch(error)
    {
        console.error('clickonmyaccount failed:', error);
        throw error;
    }
  }


  async clickOnRegisterlink()
  {
    try
    {
      await this.registerlink.waitFor({ state: 'visible', timeout: 10000 });
      await this.registerlink.click({ timeout: 10000 });
    }
    catch(error)
    {
        console.error('clickOnRegisterlink failed:', error);
        throw error;
    }
  }
  async enterproductname(phonename: string)
  {
try
{
    await this.searchBox.fill(phonename);
}
catch(error)
{
    console.error('enterproductname failed:', error);
    throw error;
}

  }

  async clicksearchbutton()
  {
try
{
    await this.searchbutton.waitFor({ state: 'visible', timeout: 10000 });
    await this.searchbutton.click({ timeout: 10000 });

}
catch(error)
{
    console.error('clicksearchbutton failed:', error);
    throw error;
}
    
  }

   async clickonLogin()
  {
try
{
    await this.login.waitFor({ state: 'visible', timeout: 10000 });
    await this.login.click({ timeout: 10000 });

}
catch(error)
{
    console.error('clickonLogin failed:', error);
    throw error;
}
    
  }
    
}
