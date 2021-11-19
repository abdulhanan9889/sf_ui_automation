import { clickAdvancedSecurityButton, proceedToLogin } from "./broadcastPage.actions"


export async function bypassSecurity(page){
   await clickAdvancedSecurityButton(page)
   await proceedToLogin(page)
   
}



