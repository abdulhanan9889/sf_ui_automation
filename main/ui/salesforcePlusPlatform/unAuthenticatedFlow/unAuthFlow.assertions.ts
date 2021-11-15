var assert = require("assert");
import { getVideoProgressbar } from "../episodePageFlow/user_interface/episodePlayerSelectors";

export async function verifyProgressBarValues(page) {
  var progressBarValues = await getVideoProgressbar(page);
  progressBarValues = await progressBarValues.evaluate(
    (value) => value.split("/")[0]
  );
  await assert.notEqual(progressBarValues, "00:00");
}