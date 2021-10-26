var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);
import { loadBrowser } from "../utilities/loadBrowser";
import { After, Before, Given, Then, When, AfterStep } from "@cucumber/cucumber";
import { acceptCookies, clickOnDreamForce } from "../actions/homePage.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";
const { setWorldConstructor } = require("@cucumber/cucumber")
import { checkExploreMoreIsPresent } from "../assertions/homepage.assertions";
import {
    clickOnAllSponsors,
    clickOnArrowForSeriesInRoles,
    clickOnArrowForSeriesInTopic,
    clickOnExploreMore,
    clickOnPlayForSeriesInRoles,
    clickOnPlayForSeriesInTopics,
} from "../tasks/experiencePage.tasks";
import {
    checkForAllEpisodesTitle,
    checkForAllSponsorsButton,
    checkForAllSponsorsTitle,
    checkForUpNextTitle,
    checkTrailorTitleForSeriesInRoles,
    checkTrailorTitleForSeriesInTopic,
} from "../assertions/experiencepage.assertions";


let page;

// User Navigates to the Experience of Salesforce Plus platform(The Background Given step to all of the Scenarios)
Given("user is on the experience page for Salesforce+", async function () {
    // page = await loadBrowser();
    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page)
    await clickOnDreamForce(page)
    await waitTillHTMLRendered(page)

});

When("user clicks on Explore More", async function () {
    await checkExploreMoreIsPresent(page);
    await clickOnExploreMore(page);
});

Then("user is navigated to Best of DF series", async function () {
    await checkForAllEpisodesTitle(page);
});

When("user clicks on the play button for series in Role section", async function () {
    await clickOnPlayForSeriesInRoles(page);
}
);

When("user clicks on the arrow button for series in Role section", async function () {
    await clickOnArrowForSeriesInRoles(page);
}
);

Then("user should be navigated to Episode1 of the series in Role section", async function () {
    await checkForUpNextTitle(page)
}
);

When("user clicks on the play button for series in Topic section", async function () {
    await clickOnPlayForSeriesInTopics(page);
}
);

Then("user should be navigated to Episode1 of the series in topic section", async function () {
    await checkTrailorTitleForSeriesInTopic(page);
}
);

When("user clicks on the arrow button for series in Topic section", async function () {
    await clickOnArrowForSeriesInTopic(page);
}
);

Then("user should be navigated to details page of the series", async function () {
    await checkForAllEpisodesTitle(page);
}
);

When("user clicks on the View All Sponsors button", async function () {
    await checkForAllSponsorsButton(page);
    // await clickOnAllSponsors(page);
    let newPromise = new Promise(x => page.once('targetcreated', target => x(target.page())));
    await clickOnAllSponsors(page);
    // const sponsorsPage = await newPromise;
    // await sponsorsPage.bringToFront();
    // console.log((await page.pages()).length)
});

Then("user should be navigated to the Sponsors page", async function () {
    // let sponsorsPage = page.targets();
    // await waitTillHTMLRendered(sponsorsPage);
    // checkForAllSponsorsTitle(sponsorsPage)
    // await sponsorsPage.close()
    // await page.waitForNavigation();
    // await checkForAllSponsorsTitle(page[1]);
});

AfterStep(async function () {
    await waitTillHTMLRendered(page);
    const ss = await page.screenshot({ fullPage: true })
    this.attach(ss, 'image/png')
})

After(async function () {
    await page.close();
});
