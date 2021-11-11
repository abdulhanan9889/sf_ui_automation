var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(720000);
import { loadBrowser } from "../utilities/loadBrowser";
import { After, Before, Given, Then, When, AfterStep, AfterAll } from "@cucumber/cucumber";
import { acceptCookies, clickOnDreamForce, clickOnExperienceSectionButton, navigateToDetailsPageOfTheEvent, navigateToDreamForcePage, navigateToFirstEpisode, navigateToSecondEpisode, testData, testDataDelete, testDataSet } from "../experiencePageFlow/experiencePage.tasks";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";
const { setWorldConstructor } = require("@cucumber/cucumber")
import { checkExploreMoreIsPresent } from "../homePageFlow/homepage.assertions";
import {
    clickOnAllSponsors,
    clickOnArrowForSeriesInRoles,
    clickOnArrowForSeriesInTopic,
    clickOnExploreMore,
    clickOnPlayForSeriesInRoles,
    clickOnPlayForSeriesInTopics,
    closeLoginModal,
} from "./experiencePage.tasks";
import {
    checkExperiencePagetitle,
    checkForAllEpisodesTitle,
    checkForAllSponsorsButton,
    checkForAllSponsorsTitle,
    checkForUpNextTitle,
    checkSignUpToWatchButton,
    checkSpeakerName,
    checkWatchcNowButton,
} from "./experiencepage.assertions";
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import SFDataInsertion from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
import { eventURL } from "./experiencePage.selectors";
export var cliUsername;
export var cliPassword;
export var cliLoginUrl;
export var cliInstanceUrl;

let page;
let ss;
let recorder;
let target;

Given('user generates data for authenticated flows and navigates to added Event Page', async function (datatable) {
    console.log("Test123123")
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
    await testData(testDataParameters.seriesStartFromToday, testDataParameters.seriesEndFromToday, testDataParameters.noOfSeries, testDataParameters.noOfEpisodesPerSeries, testDataParameters.noOfSpeakers)
    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await acceptCookies(page)
    await waitTillHTMLRendered(page)
    await navigateToDreamForcePage(page)
    await waitTillHTMLRendered(page)
    await checkExploreMoreIsPresent(page)
    await page.goto(eventURL())
    // await page.waitFor(5000)
    await waitTillHTMLRendered
    // await acceptCookies(page);
    await checkExploreMoreIsPresent(page)
})
When('user navigates to the added Event details page', async function () {
    console.log(testDataSet)
    await navigateToDetailsPageOfTheEvent(page)
    await waitTillHTMLRendered(page)
    // await page.waitFor(5000)
    await checkSignUpToWatchButton(page)
});
Then('user navigates to an episode page of the added event', async function () {
    await navigateToFirstEpisode(page)
    await waitTillHTMLRendered(page)
    await checkSpeakerName(page)
    // await page.waitFor(5000)
    // await page.goBack()
    // await waitTillHTMLRendered(page)
    // await navigateToSecondEpisode(page)
    // await waitTillHTMLRendered(page)
    // await page.waitFor(5000)
});
// User Navigates to the Experience of Salesforce Plus platform(The Background Given step to all of the Scenarios)
Given("user navigates to the experience page for Salesforce+ page", async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/experiencePage/uat/navigateToBestOfDF.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnExperienceSectionButton(page)
    // await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)
});

When("user clicks on Explore More", async function () {
    await waitTillHTMLRendered(page)
    // await checkWatchcNowButton(page)
    // // await checkExploreMoreIsPresent(page);
    await checkExperiencePagetitle(page)
    await clickOnExploreMore(page);
});

Then("user is navigated to Best of DF series", async function () {
    // await checkForAllEpisodesTitle(page);
    // await recorder.stop()
});

Given("user navigates to the experiencePage for Salesforce+ page", async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/experiencePage/uat/navigateToEpisode1Role.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)
});
When("user clicks on the play button for series in Role section", async function () {
    await clickOnPlayForSeriesInRoles(page);
}
);

Given("user navigates to the experiencePage for Salesforce+", async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/experiencePage/uat/navigateToDetailsRole.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)
});
When("user clicks on the arrow button for series in Role section", async function () {
    await clickOnArrowForSeriesInRoles(page);
}
);

Then("user should be navigated to Episode1 of the series", async function () {
    await closeLoginModal(page)
    await checkForUpNextTitle(page)
    // await checkForSeriesTitle(page)
    // await recorder.stop()
}
);
Given("user navigates to the experience Page for Salesforce+", async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/experiencePage/uat/navigateToEpisode1Topic.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)
});
When("user clicks on the play button for series in Topic section", async function () {
    await clickOnPlayForSeriesInTopics(page);
}
);

// Then("user should be navigated to Episode1 of the series in topic section", async function () {
//     await checkTrailorTitleForSeriesInTopic(page);
//     // await recorder.stop()
// }
// );

Given("user opens the experiencePage for Salesforce+", async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/experiencePage/uat/navigateToDetailsTopic.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)
});
When("user clicks on the arrow button for series in Topic section", async function () {
    await clickOnArrowForSeriesInTopic(page);
}
);

Then("user should be navigated to details page of the series", async function () {
    await checkForAllEpisodesTitle(page);
    // await recorder.stop()
}
);

Given("user is on the experience page for Salesforce+", async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/experiencePage/uat/navigateToSponsorsPage.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)

});
When("user clicks on the View All Sponsors button", async function () {
    await checkForAllSponsorsButton(page);
    await clickOnAllSponsors(page);
});

Then("user should be navigated to the Sponsors page", async function () {
    // let sponsorsPage = await target.page()
    // // await waitTillHTMLRendered(sponsorsPage);
    // checkForAllSponsorsTitle(sponsorsPage)
    // // await sponsorsPage.close()
    // await page.waitForNavigation();
    // await checkForAllSponsorsTitle(page[1]);
    // // await recorder.stop()
});

AfterStep("@experiencePage", async function () {
    await waitTillHTMLRendered(page);
    ss = await page.screenshot({ fullPage: true })
    await this.attach(ss, 'image/png')
})

After("@experiencePage", async function () {
    await page.close();
});

AfterAll(async function () {
    // let baseobject = new BaseObject()
    // // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
    await testDataDelete()
})