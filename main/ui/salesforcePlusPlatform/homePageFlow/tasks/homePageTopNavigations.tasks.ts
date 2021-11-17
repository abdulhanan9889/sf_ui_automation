import { clickOnDreamForce } from "../../tasks/commonTasks";
import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";
export async function navigateToDreamforceTab(page) {
    await clickOnDreamForce(page)
    await waitTillHTMLRendered
}
