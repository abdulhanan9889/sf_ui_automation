const puppeteer = require("puppeteer");
const { QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
puppeteer.registerCustomQueryHandler("shadow", QueryHandler);

export const featuredEpisodeCard = `shadow/a[href="/plus/series/SeriesAutomation-emumba11Mo1323/episode/episode-2"]`;
export const featuredEpisodeIframe = `shadow/iframe[class="vidyard-iframe-kYdybdPFUnaJEKvdUZQCro"]`;
