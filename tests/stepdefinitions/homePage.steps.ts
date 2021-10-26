var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);
import { loadBrowser } from "../utilities/loadBrowser";
import { After, Given, Then, When, AfterStep, AfterAll } from "@cucumber/cucumber";
import {
    checkExploreSFisPresent,
    checkExploreMoreIsPresent,
    checkTrailorTitle,
    checkForWatchTrailorButton,
    checkFeaturedEpisodeTitle,
} from "../assertions/homepage.assertions";
import {
    acceptCookies,
    clickOnArrowIcon,
    clickOnDreamForce,
    clickOnExperienceSectionButton,
    clickOnExploreSF,
    clickOnFeaturedEpisode,
    clickOnPlayIcon,
} from "../actions/homePage.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";
import { navigateToDreamforceTab, navigateToExploreSFPage } from "../tasks/homePage.tasks";
import { SFDataInsertion } from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'


let page;

Given('user generates data for authenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createOriginalSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday)
})

Given('user generates data for unauthenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given("user is on the salesforcePlus Homepage", async function () {
    page = await loadBrowser();
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await page.waitFor(1500);
});

When("user clicks on Explore Salesforce Button", async function () {
    await navigateToExploreSFPage(page)
});

Then("user clicks on the Dreamforce tab", async function () {
    await navigateToDreamforceTab(page)
    await checkExploreMoreIsPresent(page);
});

// When("user scrolls down Clicks on the play icon for a Series", async function () {
//     await waitTillHTMLRendered(page);
//     await clickOnPlayIcon(page); 
// });

Then("user should be navigated to Trailor page of the series", async function () {
    await waitTillHTMLRendered(page);
    await checkTrailorTitle(page);
}
);

// When("user scrolls down Clicks on the arrow icon for a Series", async function () {
//     await waitTillHTMLRendered(page);
//     await clickOnArrowIcon(page);
//   }
// );

Then("user should be navigated to the series detail page and play the trailor", async function () {
    await waitTillHTMLRendered(page);
    await checkForWatchTrailorButton(page);
}
);

When("user clicks on an episode in the Featured section", async function () {
    await waitTillHTMLRendered(page);
    await clickOnFeaturedEpisode(page);
});

Then("user should be navigated to the relevant episode page", async function () {
    await checkFeaturedEpisodeTitle(page);
}
);

When("user clicks on a tile in the Experiences section", async function () {
    await clickOnExperienceSectionButton(page)
});

Then("user should be navigated to the relevant experience page", async function () {
    await checkExploreMoreIsPresent(page)
}
);

AfterStep(async function () {
    await waitTillHTMLRendered(page);
    const ss = await page.screenshot({ fullPage: true })
    this.attach(ss, 'image/png')
})

After(async function () {
    await page.close();
});

AfterAll(async function () {
    let baseobject = new BaseObject()
    // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})
