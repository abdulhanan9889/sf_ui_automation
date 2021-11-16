// import { testDataSet } from "../../experiencePage.tasks"
import { testDataSet } from "../tasks/testDataGeneration.tasks"
export function eventURL() {
    return `https://www-qa1.salesforce.com/plus/experience/${testDataSet.eventNames[0]}`
}
export function seriesDetails() {
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}"]`
}
export function noOfEpisodes() {
    return `shadow/[class="hero--caption bxp-global-caption"]`
}
export function firstEpisode(){
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-1"]`
}
export function nextEpisode(episodeNo){
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-${episodeNo + 2}"]`
}