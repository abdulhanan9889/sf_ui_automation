var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'tests/reports/jsonFiles/experiencePage.json',
        output: 'tests/reports/htmlReports/qa_experiencePage.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        screenshotsDirectory: 'tests/screenshots/experiencePage/qa/',
        storeScreenshots: true,
        noInlineScreenshots: true,
        metadata: {
            "App Version":"N/A",
            "Test Environment": "qa",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);