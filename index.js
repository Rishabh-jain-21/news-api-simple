console.log("news connected");
let newsContent = document.getElementById('news-content');
let apiKey = 'e8ab547cb58b40da83db20f5b30a8c56';
let newHtml = "";
let defaultURL = "./defaultimage.jpg";
let page = 1;
let totalResults = 0;
let nextButton = document.getElementById('next');

//creating a get request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${page}&pageSize=100`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        totalResults = json.totalResults;
        console.log(totalResults);
        articles.forEach(element => {
            let contentHTML = `<div class="news-container">
            <div class="pic"><img
                    src="${element.urlToImage != null ? element.urlToImage : defaultURL}"
                    alt="image"></div>
            <div class="content">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <a href="${element.url}">Read more....</a>
            </div>

        </div>`;
            newHtml += contentHTML;
        });

        newsContent.innerHTML = newHtml;
    }
    else {
        console.log('some error ocuured');
    }
}

xhr.send();


