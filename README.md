# SF-UI-Automation-Tasks
This project consists of the test-generation scripts along with the UI automation scripts for the different environments(QA, UAT, etc)
## Dependencies and setup
*Node.js* needs to be installed globally on your machine. You can find the latest version for your system [here](https://nodejs.org/en/download/)

After installing Node.js, you need to install the remaining dependencies using `npm i`. This will install the following required technologies:
- typescript
- puppeteer
- cucumber
- cucumber HTML Reporter
- ts-node
- mailinator
- jsForce

### The project directory structure
+reports

    +qa_homePage.js
    +uat_homePage.js
    .
    .
+tests

    +actions
      homePage.actions.ts
      .
      .
    +assertions
      homepage.assertions.ts
      .
      .
    +features
      homePage.feature
      .
      .
    +reports
      +htmlReports
        uat_homePage.html  
        .
      +jsonFiles
        homePage.json
        .
    +selectors
      homePage.selectors.ts
      .
      .
    +stepdefinitions
      homePage.steps.ts
      .
      .
    +tasks
      homePage.tasks.ts
      .
      .
    +testdatageneration
      +entities
        BaseObject.ts
        .
        .
      +testDataFiles
        channel_data.json
        event_data.json
        .
        .
      +testDataLogic
        SFDataInsertion.ts
        testDataLogic.ts
    +utilities
      loadBrowser.ts
      waitTillHTMLRendered.ts
    
  cucumber.js
  
  package-lock.json
  
  package.json
  
  tsconfig.json

### How to run tests
Test for specific page can be executed using a single command
```
node node_modules/@cucumber/cucumber/bin/cucumber-js -p profileName -p environmentName
```
where 'profileName' depends upon the flow to be executed and can have one of these values:

|Value|Description|
|:---|:---|
|authFlow| Runs the authFlow.feature according to the defined tag(current)|
|unAuthFlow| Runs the unAuthFlow.feature according to the defined tag(current)|
|broadcastPage| Runs the broadcastPage.feature according to the defined tag(current)|
|episodePage| Runs the episodePage.feature according to the defined tag(current)|
|homePage| Runs the homePage.feature according to the defined tag(current)|
|loginFlow| Runs the loginFlow.feature according to the defined tag(current)|
|experiencePage| Runs the experiencePage.feature according to the defined tag(current)|



while the 'environmentName' depends upon the enviornment the test is to be executed on and can have one of these values:
|Value|URL|
|:---|:---|
|qaEnv| https://www-qa1.salesforce.com/plus|
|uatEnv| https://www-uat1.salesforce.com/plus|
|perfEnv| https://www-perf.salesforce.com/plus|


### How to view reports
Data for Reports is generated automatically when the above command is executed and is saved in the **tests/reports/jsonFiles** folder in the form of a jSON file. The latest report for a test can be viewed by executing the following command:
```
node reports/reportName.js
```
where reportName.js can have one of the following values with prefix defining the environment('**uat_**' , '**perf_**' or '**qa_**'), depending upon the executed test:
|Value|Description|
|:---|:---|
|experiencePageReport.js| Generates a HTML report for the Experience Page|
|homePageReport.js|Generates a HTML report for the Home Page|
|loginFlowReport.js| Generates a HTML report for the Login Flow|
|unAuthFlowReport.js| Generates a HTML report for the unAuth Flow|
|authFlowReport.js| Generates a HTML report for the auth Flow|
|broadcastPageReport.js| Generates a HTML report for the Broadcast Page|
|episodePageReport.js| Generates a HTML report for the Episode Page|

so for example, if HTML report for the episode page test on the UAT environment is to be generated, the command to be executed will be:
```
node reports/uat_episodePage.js
```

This generates a HTML report for the test, which is saved in **tests/reports/htmlReports**.
