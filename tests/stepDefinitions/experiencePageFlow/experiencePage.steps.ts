var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(720000);
import { loadBrowser } from "../../../main/utilities/loadBrowser";
import { After, Before, Given, Then, When, AfterStep, AfterAll } from "@cucumber/cucumber";
import { navigateToDreamForcePage } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/expPageTopnavigation.tasks";
import { clickOnDreamForce } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/expPageTopnavigation.tasks";
import { acceptCookies } from "../../../main/ui/salesforcePlusPlatform/tasks/commonTasks";
import {
    navigateToDetailsPageOfTheEvent,
    navigateToFirstEpisode,
    testData,
    testDataDelete,
    testDataSet
} from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/testDataGeneration.tasks";
import { clickOnExperienceSectionButton } from "../../../main/ui/salesforcePlusPlatform/homePageFlow/actions/experienceCarousel.actions";
import { waitTillHTMLRendered } from "../../../main/utilities/waitTillHTMLRendered";
const { setWorldConstructor } = require("@cucumber/cucumber")
import { checkExploreMoreIsPresent } from "../../../main/ui/salesforcePlusPlatform/homePageFlow/assertions/experiencePageAssertions";
import { clickOnAllSponsors } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/sponsorsSection.tasks";
import { clickOnExploreMore } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/expPageHeroBanner.tasks";
import { closeLoginModal } from "../../../main/ui/salesforcePlusPlatform/tasks/commonTasks";
import { clickOnArrowForSeriesInTopic, clickOnPlayForSeriesInTopics} from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/topicCarouselTasks";
import { clickOnArrowForSeriesInRoles, clickOnPlayForSeriesInRoles } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/tasks/roleCarousel.tasks";
import { checkForAllSponsorsTitle } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/sponsorsSectionAssertions";
import { checkWatchcNowButton } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/testDataGenerationAssertions";
import { checkSpeakerName } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/speakerSectionAssertions";
import { checkSignUpToWatchButton } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/testDataGenerationAssertions";
import { checkForUpNextTitle } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/upNextSectionAssertions";
import { checkForAllSponsorsButton } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/sponsorsSectionAssertions";
import { checkForAllEpisodesTitle } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/testDataGenerationAssertions";
import { checkExperiencePagetitle } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/assertions/testDataGenerationAssertions";
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'
import { eventURL } from "../../../main/ui/salesforcePlusPlatform/experiencePageFlow/user_interface/testDataSelectors";
import expTestData from "../../../main/testDataGeneration/testDataFiles/featureFileTestData.json"

export var cliUsername;
export var cliPassword;
export var cliLoginUrl;
export var cliInstanceUrl;
let i
let page;
let ss;
let recorder;
let target;
Given('user generates data for authenticated flows and navigates to added Event Page', async function () {
    console.log(expTestData.length)
        for ( i=0; i < expTestData.length; i++){
            await testData(expTestData[i].seriesStartFromToday,
                expTestData[i].seriesEndFromToday,
                expTestData[i].noOfSeries,
                expTestData[i].noOfEpisodesPerSeries,
                expTestData[i].noOfSpeakers,
                expTestData[i].firstName,
                expTestData[i].lastName,
                expTestData[i].designation,
                expTestData[i].company)
        }
        
        page = await loadBrowser()
        await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
        await acceptCookies(page)
        await waitTillHTMLRendered(page)
        await navigateToDreamForcePage(page)
        await waitTillHTMLRendered(page)
        await checkExploreMoreIsPresent(page)
        await page.goto(eventURL())
        await waitTillHTMLRendered
        await checkExploreMoreIsPresent(page)

});


// Given('user generates data for authenticated flows and navigates to added Event Page', async function (datatable) {
//     console.log("Test123123")
//     const testDataParameters = await datatable.hashes()[0]
//     await testData(testDataParameters.seriesStartFromToday,
//         testDataParameters.seriesEndFromToday,
//         testDataParameters.noOfSeries,
//         testDataParameters.noOfEpisodesPerSeries,
//         testDataParameters.noOfSpeakers,
//         testDataParameters.firstName,
//         testDataParameters.lastName,
//         testDataParameters.designation,
//         testDataParameters.company)
//     page = await loadBrowser()
//     await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
//     await acceptCookies(page)
//     await waitTillHTMLRendered(page)
//     await navigateToDreamForcePage(page)
//     await waitTillHTMLRendered(page)
//     await checkExploreMoreIsPresent(page)
//     await page.goto(eventURL())
//     await waitTillHTMLRendered
//     await checkExploreMoreIsPresent(page)
// })


When('user navigates to the added Event details page', async function () {
    // console.log(testDataSet)
    await navigateToDetailsPageOfTheEvent(page)
    await waitTillHTMLRendered(page)
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