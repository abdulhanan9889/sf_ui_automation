export let skipForNowButton = `[onclick="skipForNowActionJS();"]`;

export async function getCancelAndLogoutButton(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector("bxp-login-modal")
      ?.shadowRoot?.querySelector("div > div > div > div.login__form-ctas > p");
  });
}

export async function getMuteOrUnmuteButton(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.player-container > div > bxp-vidyard-player"
      )
      ?.shadowRoot?.querySelector(
        "div > div > div > div.volume-container > button"
      );
  });
}

export async function getLogedOutText(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > hgf-globalnavigation")
      ?.shadowRoot?.querySelector(
        "header > div:nth-child(2) > div > div > div > div > div.globalnavbar-header-container > div.header-right-content > div > div.global-nav-login-flydown.global-login > div > div"
      );
  });
}

export async function getSpeakerFourName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(4) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerFourDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(4) > div > span.speaker-card-title"
      );
  });
}

export async function getSpeakerFiveName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(5) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerFiveDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(5) > div > span.speaker-card-title"
      );
  });
}

export async function getSpeakerSixName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(6) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerSixDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(6) > div > span.speaker-card-title"
      );
  });
}

export async function getSpeakerSevenName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(7) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerSevenDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(7) > div > span.speaker-card-title"
      );
  });
}

export async function getSpeakerEightName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(8) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerEightDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(8) > div > span.speaker-card-title"
      );
  });
}

export async function getSpeakerNineName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(9) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerNineDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(9) > div > span.speaker-card-title"
      );
  });
}

export async function getSpeakerTenName(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(10) > div > span.speaker-name"
      );
  });
}

export async function getSpeakerTenDesignation(page) {
  return await page.evaluateHandle(() => {
    return document
      ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
      ?.shadowRoot?.querySelector("div > salesforceplus-router")
      ?.shadowRoot?.querySelector("div > salesforceplus-view")
      ?.shadowRoot?.querySelector(
        "div > div.episode-info > div.details-container > bxp-episode-details"
      )
      ?.shadowRoot?.querySelector(
        "div > div > ul > li:nth-child(10) > div > span.speaker-card-title"
      );
  });
}
