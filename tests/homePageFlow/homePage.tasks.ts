import { clickOnDreamForce, clickOnExploreSF } from "./homePage.actions";
import { checkExploreSFisPresent } from "./homepage.assertions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";


export async function navigateToExploreSFPage(page) {
    await checkExploreSFisPresent(page)
    await clickOnExploreSF(page)
}

export async function navigateToDreamforceTab(page) {
    await clickOnDreamForce(page)
    await waitTillHTMLRendered
}
