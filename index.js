console.log("News Monkey");
displayNews();

function displayNews() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=in&apiKey=7edd03d420f44c49aedec8af44c45502", true );

  xhr.onload = function () {
    let news = JSON.parse(this.responseText);
    let html = "";
    news.articles.forEach((element) => {
      html += `
                <div class="card mx-2 my-2" style="width: 18rem;">
                    <img src="${element.urlToImage}" class="card-img-top my-1">
                    <div class="card-body">
                        <span class="badge bg-secondary my-1">${element.source.name}</span>
                        <a href = "${element.url}" target = "_blank" style="color:black"><h5 class="card-title" >${element.title}</h5></a>
                        <p class="card-text">${element.description}</p>
                        <hr>
                        <span class="badge bg-secondary my-1">${element.publishedAt}</span>
                    </div>
                </div>
            `;
    });
    let newsHeadlines = document.querySelector('#newsHeadlines');
    newsHeadlines.innerHTML = html;
  };

  xhr.send();
}
