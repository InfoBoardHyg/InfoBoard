import { newsView } from "./newsView.js";

export function newsFetch() {
    let url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fregionale%2Fnord";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            newsView(data.items)
        });
}