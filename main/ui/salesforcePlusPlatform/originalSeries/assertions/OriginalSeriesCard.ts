


var assert = require('chai').assert;
var expect = require('chai').expect;
var Assertion = require('soft-assert/lib/assertion')

import { convertCompilerOptionsFromJson, isAssertionExpression } from "typescript";
import {seriesCard} from "../user_interface/OriginalSeriesSection"
import { seriesButton } from "../user_interface/OriginalSeriesSection";
import { seriesPlayButton , seriesCardComingSoon } from "../user_interface/OriginalSeriesSection";
import { testDataSet } from "../tasks/createDestroyOriginalSeries";
import dBAssertionOriginalSeries from "../../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsSeries"
export async function verifyOriginalSeriesCard(page) {

    let seriesCard1 = await page.$(seriesCard())
    let seriesCard2 = await seriesCard1.evaluate(
        (ele) => ele.innerHTML
    );


    let object1= await dBAssertionOriginalSeries.getSeriesDataFromDB(testDataSet.seriesIDs[0])
   
    expect(seriesCard2).to.include(`<div class="card-buttons --bottom"><bxp-icon-button class="play-button"></bxp-icon-button><bxp-icon-button class="right-arrow-button"></bxp-icon-button>`);
    //@ts-ignore
    expect(seriesCard2).to.include(object1.records[0].Name)
    //@ts-ignore
    expect(seriesCard2).to.include(object1.records[0].Description__c)

}

export async function verifyOriginalSeriesCardUnpublished(page){
    let seriesCard1 = await page.$(seriesCardComingSoon())
    let seriesCard2 = await seriesCard1.evaluate(
        (ele) => ele.innerHTML
    );
    expect(seriesCard2).to.include(`<div class="coming-soon-scrim">`)

}
