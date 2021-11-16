// export const getTrailblazzerMeButton = `shadow/[href="/a/auth"]`
// export const getTrailblazzerMeButton = `shadow/[#trailblazer-1 a]`
export let skipForNowButton = `[onclick="skipForNowActionJS();"]`;
export const getSignUpButton = `[name="loginPage:email-card-form:j_id119"][value="Sign Up"]`
export const getFirstNameField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputFirstName"]`
export const getLastNameField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputLastName"]`
export const getProfileUrlField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputProfileUrl"]`
export const getNextButton = `input[name="progressive:j_id33:j_id34:progressive-card-form:j_id100"]`
export const getCompanyNameField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputCompanyName"]`
export const getJobTitleField = `input[id="progressive:j_id33:j_id34:progressive-card-form:inputTitle"]`
export const getRoleNameField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputRoleName"]`
export const getRelationshipToSalesforceField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputRelationship"]`
export const getCountryField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputCountry"]`
export const getStateField = `[id="progressive:j_id33:j_id34:progressive-card-form:inputState"]`
export const getPrivacyCheckbox = `[id="tos-checkbox"]`
export const getDoneButton = `[name="progressive:j_id33:j_id34:progressive-card-form:j_id88"]`
export const getWorkEmailField = `shadow/[data-id="emailInput"]`
export const getWorkPhoneField = `shadow/[type="tel"]`
export const getCompanySizeDropDown = `shadow/[aria-label*="Company Size"]`
export const getJobRoleDropDown = `shadow/[aria-label*="Job Role"]`
export const getRecentUpdateCheckbox = `shadow/[id*="recieve-updates"]`
export const getCountryCodeField = `shadow/[id*="country-code"]`
export const getPhoneField = `shadow/[type="phone"]`
export const getInformationForMarketPurposesCheckbox = `shadow/[id*="contact-info"]`
export const getShareContactInfoCheckbox = `shadow/[id*="slack-info"]`
export const getCompleteMyMembershipButton = `shadow/button.--primary`

export const getTrailblazzerMeButton = `shadow/[href="/a/auth"] .header-text`
// export  async function getTrailblazzerMeButton(page){
//     return page.evaluateHandle(()=>{
//         return document?.querySelector("body > hgf-globalnavigation")?.shadowRoot?.querySelector(`[href="/a/auth"] .header-text`)
//     })
// }
export const getWorkEmailLabel = `shadow/[for*='work-email']`
export const getSignUpErrorMessage = `shadow/[class="slds-m-bottom_xx-small slds-m-top_x-small slds-text-align_center tbid-card-title-font"]`
export const getWrongOTPErrorMessage = `shadow/.slds-form-element__help`