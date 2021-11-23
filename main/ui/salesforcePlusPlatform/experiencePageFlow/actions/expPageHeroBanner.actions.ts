import { isAssertionExpression } from "typescript";
var assert = require("assert");
import { getExploreMoreButton } from "../user_interface/heroBannerSelectors";
export async function clickOnExploreMore(page) {

    try{
    await page.waitForSelector(getExploreMoreButton)
    let exploreMoreButton = await page.$(getExploreMoreButton);
    await exploreMoreButton.click()}
    catch{
        console.log("The explore more button is not present/found")
        assert.fail("The explore more button is not present/found");
        
    }
}
