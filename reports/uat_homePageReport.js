var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'tests/reports/jsonFiles/homePage.json',
        output: 'tests/reports/htmlReports/uat_homePage.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        screenshotsDirectory: 'tests/screenshots/homePage/uat/',
        storeScreenshots: true,
        noInlineScreenshots: true,
        metadata: {
            "App Version":"N/A",
            "Test Environment": "uat",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);