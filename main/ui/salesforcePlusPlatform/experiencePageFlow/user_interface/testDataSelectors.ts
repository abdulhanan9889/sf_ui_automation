// import { testDataSet } from "../../experiencePage.tasks"
import { testDataSet } from "../actions/testDataGeneration.actions"
export function eventURL(eventNo) {
    return `https://www-qa1.salesforce.com/plus/experience/${testDataSet.eventNames[eventNo]}`
}
// export function eventSeriesURL(eventNo) {
//     return `https://www-qa1.salesforce.com/plus/experience/${testDataSet.eventNames[eventNo]}/series/${testDataSet.seriesNames[seriesNo]}`
// }
export function seriesDetails(eventNo, seriesNo) {
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[eventNo]}/series/${testDataSet.seriesNames[seriesNo]}"]`
}
export function noOfEpisodes() {
    return `shadow/[class="hero--caption bxp-global-caption"]`
}
export function firstEpisode(){
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-1"]`
}
export function episode(eventNo: number, seriesNo: number, episodeNo: number){
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[eventNo]}/series/${testDataSet.seriesNames[seriesNo]}/episode/episode-${episodeNo}"]`

}
export function nextEpisode(episodeNo){
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-${episodeNo + 2}"]`
}