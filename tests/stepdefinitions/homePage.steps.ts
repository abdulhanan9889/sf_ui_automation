var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);
import { loadBrowser } from "../utilities/loadBrowser";
import { After, Given, Then, When, AfterStep, Before } from "@cucumber/cucumber";
import {
  checkExploreSFisPresent,
  checkExploreMoreIsPresent,
  checkTrailorTitle,
  checkFeaturedEpisodeTitle,
  checkWatchNowisPresent,
  checkAllEpisodesTitle,
} from "../assertions/homepage.assertions";
import {
  acceptCookies,
  clickOnArrowIcon,
  clickOnDreamForce,
  clickOnExperienceSectionButton,
  clickOnExploreSF,
  clickOnFeaturedEpisode,
  clickOnPlayIcon
} from "../actions/homePage.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";
import { navigateToDreamforceTab, navigateToExploreSFPage } from "../tasks/homePage.tasks";
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import { forEachChild } from "typescript";

let page;
let recorder;
let ss

Given("user is on the salesforcePlus Homepage", async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/homePage/uat/navigateToDreamForceTab.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await waitTillHTMLRendered(page);
});

When("user clicks on Explore Salesforce Button", async function () {
  await navigateToExploreSFPage(page)
  await waitTillHTMLRendered(page);
});

Then("user clicks on the Dreamforce tab", async function () {
  await navigateToDreamforceTab(page)
  await checkWatchNowisPresent(page)
  // await recorder.stop()
});

Given("user navigates to the salesforcePlus Homepage", async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/homePage/uat/navigateToTrailorPage.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  //await waitTillHTMLRendered(page);
});
When("user scrolls down Clicks on the play icon for a Series", async function () {
  //await waitTillHTMLRendered(page);
  await clickOnPlayIcon(page);
});
Then("user should be navigated to Trailor page of the series", async function () {
  //await waitTillHTMLRendered(page);
  await checkTrailorTitle(page);
  //await recorder.stop()
}
);

Given("user is on the salesforcePlus Home page", async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/homePage/uat/navigateToSeriesDetailsPage.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await waitTillHTMLRendered(page);
});
When('user scrolls down Clicks on the arrow icon for a Series', async function () {
  // await waitTillHTMLRendered(page)
  await clickOnArrowIcon(page)
});
Then('user should be navigated to the series detail page and play the trailor', async function () {
  await waitTillHTMLRendered(page)
  await checkAllEpisodesTitle(page)
  // await recorder.stop();
});

Given("user is on the salesforce Plus Home page", async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/homePage/uat/navigateToFeaturedEpisode.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await waitTillHTMLRendered(page);
});
When("user clicks on an episode in the Featured section", async function () {
  await clickOnFeaturedEpisode(page)
  await waitTillHTMLRendered(page);
});
Then("user should be navigated to the relevant episode page", async function () {
  await waitTillHTMLRendered(page);
  await checkFeaturedEpisodeTitle(page);
  // await recorder.stop()
}
);

Given("user is on the salesforce Plus Homepage", async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/homePage/uat/navigateToExperiencePage.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await waitTillHTMLRendered(page);

});
When("user clicks on a tile in the Experiences section", async function () {
  await clickOnExperienceSectionButton(page)
});
Then("user should be navigated to the relevant experience page", async function () {
  await waitTillHTMLRendered(page);
  await checkExploreMoreIsPresent(page)
  // await waitTillHTMLRendered
  // await recorder.stop()
}
);

AfterStep("@homePage",async function () {
  await waitTillHTMLRendered(page);
  ss = await page.screenshot({ fullPage: true })
  await this.attach(ss, 'image/png')
})

After("@homePage", async function () {
  await page.close();
});

