
import { testDataSet } from '../tasks/createDestroyOriginalSeries'
export function episodeButton() { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-1"]` }
export function nextEpisodeButton(episodeNo) { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-${episodeNo + 2}"]` }
export function firstEpisodeButton() { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-1"]` }
export function secondEpisodeButton() { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-3"]` }