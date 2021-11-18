const puppeteer = require("puppeteer");
const { QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
puppeteer.registerCustomQueryHandler("shadow", QueryHandler);
export let ACCEPT_COOKIES_BUTTON = "button#onetrust-accept-btn-handler";
export let getDreamForceTab = `shadow/[href="/plus/experience/Sup_E2E0712_CG_Event1"]`
export let getLoginWithTrailblazzerIDButton = `shadow/[href="/a/auth"] .link-content`
export let getEmailButton = `[id="loginPage:j_id61"] [aria-label="Email"]`
export let getEmailInputField = `input[id="loginPage:email-card-form:emailTextInput"]`
export let getLoginButton = `[id="submit-email"]`
export let getTokenInputField = `[id="loginPage:email-card-form:challengeTextInput"]`
export let getContinueButton = `[id="verify-challenge-button"]`
export const getCloseButtonLoginModal = `shadow/[class="modal--close-btn"]`



export const getSpeakerOneName = `shadow/ul.speakers-container li:nth-child(1) .speaker-name`
export const getSpeakerOneDesignation = `shadow/ul.speakers-container li:nth-child(1) .speaker-card-title`
export const getSpeakerTwoName = `shadow/ul.speakers-container li:nth-child(2) .speaker-name`
export const getSpeakerTwoDesignation = `shadow/ul.speakers-container li:nth-child(2) .speaker-card-title`
export const getSpeakerThreeName = `shadow/ul.speakers-container li:nth-child(3) .speaker-name`
export const getSpeakerThreeDesignation = `shadow/ul.speakers-container li:nth-child(3) .speaker-card-title`


export const getCloseButton = `shadow/span[aria-label="Close"]`









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









