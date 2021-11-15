
let unAuthFlow = [
  `tests/features/unAuthFlow.feature
  --require tests/stepDefinitions/unAuthenticatedFlow/unAuthFlow.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/unAuthFlow.json`
]

let authFlow = [
  `tests/features/authFlow.feature
  --require tests/stepDefinitions/authenticatedFlow/authFlow.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/authFlow.json`
]

let broadcastPage = [
  `tests/features/broadcastPage.feature
  --require tests/stepDefinitions/broadcastPageFlow/broadcastPage.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/broadcastPage.json`
]

let episodePage = [
  `tests/features/episodePage.feature
  --require tests/stepDefinitions/episodePageFlow/episodePage.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/episodePage.json`
]

let loginFlow = [
  `tests/features/loginFlow.feature
  --require tests/stepDefinitions/loginFlow/loginFlow.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/loginFlow.json`
]

let experiencePage = [
  `tests/features/experiencePage.feature
  --require tests/stepDefinitions/experiencePageFlow/experiencePage.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/experiencePage.json`
]

let homePage = [
  `tests/features/homePage.feature
  --require tests/stepDefinitions/homePageFlow/homePage.steps.ts
  --require-module ts-node/register
  --format progress-bar
  --publish-quiet
  --format json:tests/reports/jsonFiles/homePage.json`
]

let qaEnv = [
  `--world-parameters '{\"URL\":\"https://www-qa1.salesforce.com/plus\"}`
]

let uatEnv = [
  `--world-parameters '{\"URL\":\"https://www-uat1.salesforce.com/plus\"}`
]

let perfEnv = [
  `--world-parameters '{\"URL\":\"https://www-perf.salesforce.com/plus\"}`
]

let authenticatedContentFlows = `${authFlow} ${broadcastPage} ${loginFlow} ${experiencePage}`
let unAuthenticatedContentFlows = `${unAuthFlow} ${episodePage}`
let bothFlows = `${homePage} ${episodePage}`
let allFlows = `${authFlow} ${broadcastPage} ${episodePage} ${experiencePage} ${homePage} ${loginFlow} ${unAuthFlow}`

let expReport = [
  `--format json:tests/reports/experiencePage.json`
]

let homePageReport = [
  `--format json:tests/reports/homePage.json`
]

module.exports = {
  'unAuthFlow': unAuthFlow,
  'authFlow': authFlow,
  'broadcastPage': broadcastPage,
  'episodePage': episodePage,
  'loginFlow': loginFlow,
  'experiencePage': experiencePage,
  'homePage': homePage,
  'qaEnv': qaEnv,
  'uatEnv': uatEnv,
  'perfEnv': perfEnv,
  "authContentFlow": authenticatedContentFlows,
  "unAuthContentFlow": unAuthenticatedContentFlows,
  "bothFlow": bothFlows,
  "allFlows": allFlows,
  'expReport': expReport,
  'homePageReport': homePageReport
};


