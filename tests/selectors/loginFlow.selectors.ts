export async function getTrailblazzerMeButton(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > hgf-globalnavigation")
            ?.shadowRoot?.querySelector("#trailblazer-1 > a > span");
    });
}

export async function getLoginDropDown(page) {
    return await page
        .$("body > hgf-globalnavigation")
        ?.shadowRoot?.querySelector(
            "header > div:nth-child(2) > div > div > div > div > div.globalnavbar-header-container > div.header-right-content > div > div.global-nav-login-flydown.global-login > div > div > div.dropdown"
        );
}
