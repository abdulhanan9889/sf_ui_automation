import { isAssertionExpression } from "typescript";
var assert = require("assert");
import { getPlayForSeriesInRoleButton, getArrowSeriesInRole, } from "../user_interface/roleCarouselSelectors";
export async function clickOnPlayForSeriesInRoles(page) {
    
    try{
    await page.waitFor(1000)
    await page.waitForSelector(getPlayForSeriesInRoleButton)
    await page.waitFor(1000)
    let playButton = await page.$(getPlayForSeriesInRoleButton);
    await page.waitFor(1000)
    await playButton.click();
    await page.waitFor(5000)
}
catch{
assert.fail("Series In Role Play button was not found")
}
}

export async function clickOnArrowForSeriesInRoles(page) {
try{
    await page.waitFor(1000)
    await page.waitForSelector(getArrowSeriesInRole)
    await page.waitFor(1000)
    let arrowSeriesInRole = await page.$(getArrowSeriesInRole)
    await page.waitFor(1000)
    await arrowSeriesInRole.click()
    await page.waitFor(5000)
}
    
catch
{
    assert.fail("Series In Role Arrow button was not found")

}
}