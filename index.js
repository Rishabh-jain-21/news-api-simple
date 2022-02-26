console.log("news connected");
let newsContent = document.getElementById('news-content');
// let apiKey = 'e8ab547cb58b40da83db20f5b30a8c56';
let newHtml = "";
let defaultURL = "./defaultimage.jpg";
let page = 1;
let totalResults = 0;
let nextButton = document.getElementById('next');

//creating a get request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://india-today-api.rishabhjain48.repl.co/api/india`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        json.forEach(element => {
            let contentHTML = `<div class="news-container">
            <div class="pic"><img
                    src="${element.img != null ? element.img : defaultURL}"
                    alt="image"></div>
            <div class="content">
                <h3>${element.title}</h3>
                <p>${element.desp}</p>
                <a href="https://www.indiatoday.in${element.link}">Read more....</a>
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


