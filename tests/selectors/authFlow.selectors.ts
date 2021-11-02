export async function getSignUpButton(page) {
    return await page.$(`[name="loginPage:email-card-form:j_id119"][value="Sign Up"]`)
}

export async function getFirstNameField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputFirstName"]`)
}

export async function getLastNameField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputLastName"]`)
}

export async function getProfileUrlField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputProfileUrl"]`)
}

export async function getNextButton(page) {
    return await page.$(`input[name="progressive:j_id33:j_id34:progressive-card-form:j_id100"]`)
}

export async function getCompanyNameField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputCompanyName"]`)
}
export async function getJobTitleField(page) {
    return await page.$(`input[id="progressive:j_id33:j_id34:progressive-card-form:inputTitle"]`)
}
export async function getRoleNameField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputRoleName"]`)
}
export async function getRelationshipToSalesforceField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputRelationship"]`)
}
export async function getCountryField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputCountry"]`)
}
export async function getStateField(page) {
    return await page.$(`[id="progressive:j_id33:j_id34:progressive-card-form:inputState"]`)
}

export async function getPrivacyCheckbox(page) {
    return await page.$(`[id="tos-checkbox"]`)
}

export async function getDoneButton(page) {
    return await page.$(`[name="progressive:j_id33:j_id34:progressive-card-form:j_id88"]`)
}

export async function getWorkEmailField(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(`[type="email"]`);
    })
}

export async function getWorkPhoneField(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(`[type="tel"]`);
    })
}

export async function getCompanySizeDropDown(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(
                "div > div > div > div.login__signup > form > div:nth-child(2) > div:nth-child(2) > select"
            );
    })
}

export async function getJobRoleDropDown(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >  salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(
                "div > div > div > div.login__signup > form > div:nth-child(3) > div > select"
            );
    })
}

export async function getRecentUpdateCheckbox(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >  salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(
                "div > div > div > div.login__signup > form > div:nth-child(5) > div:nth-child(2) > input"
            );
    })
}

export async function getCountryCodeField(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >  salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(
                "div > div > div > div.login__signup > form > div:nth-child(5) > div.form__row.sms_input > div:nth-child(1) > div > input"
            );
    })
}

export async function getPhoneField(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >  salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(`[type="phone"]`);
    })
}

export async function getInformationForMarketPurposesCheckbox(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >  salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(
                "div > div > div > div.login__signup > form > div:nth-child(5) > div:nth-child(4) > input"
            );
    })
}

export async function getCompleteMyMembershipButton(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >  salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector(
                "div > div > div > div.login__form-ctas > bxp-text-button"
            )
            ?.shadowRoot?.querySelector("button");
    })
}