
import{Page,Locator} from '@playwright/test'

export class MyAccount
{

 private readonly page:Page
 private readonly myAccountext:Locator
 private readonly logoutbutton:Locator


 constructor(page:Page)
 {
    this.page=page;
    this.myAccountext= page.locator("div h2").first();
    this.logoutbutton= page.getByRole('link', {name:'Logout'})

 }
async isMyAccountisexists()
{
    try
    {
        const isvisible=this.myAccountext.isVisible();
       return isvisible

    }
    catch(error)
    {
        console.log('error is occured')
        return false
    }
}

async clickonLogout()
{
    await this.logoutbutton.click();
}

}