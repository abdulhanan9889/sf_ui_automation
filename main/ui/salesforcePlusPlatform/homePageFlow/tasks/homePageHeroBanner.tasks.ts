import { checkExploreSFisPresent } from "../assertions/homePageHeroBannerAssertions"
import { clickOnExploreSF } from "../actions/homePageHeroBanner.actions"
export async function navigateToExploreSFPage(page) {
    await checkExploreSFisPresent(page)
    await clickOnExploreSF(page)
}