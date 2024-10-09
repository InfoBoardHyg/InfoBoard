export function newsView(data) {
    let newsArray = []
    data.forEach((element, index) => {
        
        if (element.description !== '')
            newsArray.push(element);
    });

    
    
    let newsContainer = document.getElementById("opslag-container");
    newsContainer.innerHTML = '';
    newsArray.forEach((element, index) => {
        if (index < 3) {
            let newsWrapper = document.createElement("div");
            newsWrapper.classList.add("newsWrapper");

            let newsTitle = document.createElement("h2");
            newsTitle.textContent = element.title;

            let newsDescription = document.createElement("p");
            newsDescription.textContent = element.description;

            let newsDate = document.createElement("p");
            newsDate.textContent = element.pubDate;

            newsWrapper.appendChild(newsTitle);
            newsWrapper.appendChild(newsDescription);
            newsWrapper.appendChild(newsDate);
            newsContainer.appendChild(newsWrapper);
        }
    });
}