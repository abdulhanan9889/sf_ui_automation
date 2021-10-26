import { clickOnDreamForce, clickOnExploreSF } from "../actions/homePage.actions";
import { checkExploreSFisPresent } from "../assertions/homepage.assertions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";


export async function navigateToExploreSFPage(page) {
    await checkExploreSFisPresent(page)
    await clickOnExploreSF(page)
}

export async function navigateToDreamforceTab(page) {
    await clickOnDreamForce(page)
    await waitTillHTMLRendered
}
