
let unAuthFlow = [
  'tests/features/unAuthFlow.feature',
  '--require tests/stepdefinitions/unAuthFlow.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/unAuthFlow.json'
].join(' ');

let authFlow = [
  'tests/features/authFlow.feature',
  '--require tests/stepdefinitions/authFlow.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/authFlow.json'
].join(' ');

let broadcastPage = [
  'tests/features/broadcastPage.feature',
  '--require tests/stepdefinitions/broadcastPage.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/broadcastPage.json'
].join(' ');

let episodePage = [
  'tests/features/episodePage.feature',
  '--require tests/stepdefinitions/episodePage.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/episodePage.json'
].join(' ');

let loginFlow = [
  'tests/features/loginFlow.feature',
  '--require tests/stepdefinitions/loginFlow.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/loginFlow.json'
].join(' ');

let experiencePage = [
  'tests/features/experiencePage.feature',
  '--require tests/stepdefinitions/experiencePage.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/experiencePage.json'
].join(' ');

let homePage = [
  'tests/features/homePage.feature',
  '--require tests/stepdefinitions/homePage.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:tests/reports/jsonFiles/homePage.json'
].join(' ');

let authDataGeneration = [
  'tests/features/testDataGeneration.feature',
  '--require tests/stepdefinitions/testDataGeneration.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--tags=@authenticatedData'
].join(' ');

let unauthDataGeneration = [
  'tests/features/testDataGeneration.feature',
  '--require tests/stepdefinitions/testDataGeneration.steps.ts',
  '--require-module ts-node/register',
  '--format progress-bar',
  '--publish-quiet',
  '--tags=@unauthenticatedData'
].join(' ');

let qaEnv = [
  "--world-parameters '{\"URL\":\"https://www-qa1.salesforce.com/plus\"}'"
].join(' ');

let uatEnv = [
  "--world-parameters '{\"URL\":\"https://www-uat1.salesforce.com/plus\"}'"
].join(' ');

let perfEnv = [
  "--world-parameters '{\"URL\":\"https://www-perf.salesforce.com/plus\"}'"
].join(' ');

let authenticatedContentFlows = `${authFlow} ${broadcastPage} ${loginFlow} ${experiencePage}`
let unAuthenticatedContentFlows = `${unAuthFlow} ${episodePage}`
let bothFlows = `${homePage} ${episodePage}`
let allFlows = `${authFlow} ${broadcastPage} ${episodePage} ${experiencePage} ${homePage} ${loginFlow} ${unAuthFlow}`
let expReport = [
  "--format json:tests/reports/experiencePage.json"
].join(' ');

let homePageReport = [
  "--format json:tests/reports/homePage.json"
].join(' ');

module.exports = {
  'unAuthFlow': unAuthFlow,
  'authFlow': authFlow,
  'broadcastPage': broadcastPage,
  'episodePage': episodePage,
  'loginFlow': loginFlow,
  'experiencePage': experiencePage,
  'homePage': homePage,
  'authDataGeneration': authDataGeneration,
  'unauthDataGeneration': unauthDataGeneration,
  'qaEnv': qaEnv,
  'uatEnv': uatEnv,
  'perfEnv': perfEnv,
  "authContentFlow": authenticatedContentFlows,
  "unAuthContentFlow": unAuthenticatedContentFlows,
  "bothFlow":bothFlows,
  "allFlows":allFlows,
  'expReport': expReport,
  'homePageReport': homePageReport
};


