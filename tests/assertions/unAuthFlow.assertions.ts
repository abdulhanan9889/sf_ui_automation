var assert = require("assert");
import { getVideoProgressbar } from "../selectors/common.selectors";

export async function verifyProgressBarValues(page) {
  var progressBarValues = await getVideoProgressbar(page);
  progressBarValues = await progressBarValues.evaluate(
    (value) => value.split("/")[0]
  );
  await assert.notEqual(progressBarValues, "00:00");
}

// var progressBarValues = await page.$(getVideoProgressbar)
//   let progressBarValuesText = await progressBarValues.evaluate(text => text.innerHTML)
//   progressBarValuesText = progressBarValuesText.split("/")[0]
//   await assert.notEqual(progressBarValues, "00:00");