const articles = [{
        "photo": "https://scitechdaily.com/images/Medical-Marijuana-777x536.jpg",
        "link": "https://scitechdaily.com/medical-experts-it-is-time-to-embrace-cannabis-for-medicinal-use/",
        "author": "BMJ",
        "headline": "Medical Experts: It Is Time to Embrace Cannabis for Medicinal Use"
    },
    {
        "photo": "https://28nwgk2wx3p52fe6o9419sg5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/medical-dispensary-lawsuit-hoboken-harmony-rendering.jpg",
        "link": "https://jerseydigs.com/lawsuit-seeks-to-block-hobokens-first-medical-marijuana-dispensary/",
        "author": "Chris Fry",
        "headline": "Lawsuit Seeks to Block Hoboken’s First Medical Marijuana Dispensary"
    },
    {
        "photo": "https://multiplesclerosisnewstoday.com/wp-content/uploads/2020/02/shutterstock_307948373-1000x480.jpg",
        "link": "https://multiplesclerosisnewstoday.com/news-posts/2020/09/23/medical-cannabis-lozenges-available-ms-other-patients-texas-surterra-texas/",
        "author": "Marisa Wexler, MS",
        "headline": "Medical Cannabis Lozenges Now Available for MS Patients in Texas"
    },
    {
        "photo": "https://www.orlandosentinel.com/resizer/6L0mk-TfNQs9m4SmDW1ysBrxtP0=/800x600/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/FI5FGEV7T5D6JIQK7OAAKVNYBI.jpg",
        "link": "https://www.orlandosentinel.com/business/os-bz-medical-marijuana-edibles-florida-20200921-q5j6pvt5dnggph6z5ars7evdxm-story.html",
        "author": "Austin Fuller",
        "headline": "Medical marijuana chocolates, cookies and gels hit the dispensary shelves in Florida"
    },
    {
        "photo": "https://mjbizdaily.com/wp-content/uploads/2020/07/Jerusalem-Israel-300x200.jpg",
        "link": "https://mjbizdaily.com/israel-medical-cannabis-patient-count-hits-record-as-imports-soar/",
        "author": "Matt Lamers",
        "headline": "Israel medical cannabis patient count hits record as imports soar"
    },
    {
        "photo": "https://media.heartlandtv.com/images/A+paper+on+the+front+desk+at+Tuesday's+meeting.+Photo+taken+09-22-20..jpg",
        "link": "https://www.wtva.com/content/news/Medical-Marijuana-in-Mississippi---Alternative-65-A-supporters-explain-their-side--572498591.html",
        "author": "Bronson Woodruff",
        "headline": "Medical Marijuana in Mississippi - Alternative 65-A supporters make a public plea "
    },
]

function getArticles(data) {
    data.forEach(art => {
        const card = document.createElement("div");
        card.className = `card ${art.author}`;
        card.setAttribute("href", art.link);
        const headline = document.createElement("h3");
        headline.className = "headline";
        headline.textContent = art.headline;
        const photo = document.createElement("img");
        photo.src = art.photo;
        photo.alt = headline;
        const author = document.createElement("h4");
        author.className = "author";
        author.textContent = `By ${art.author}`;
        const container = document.querySelector("div.articles-container")
        card.appendChild(headline);
        card.appendChild(photo);
        card.appendChild(author);
        container.appendChild(card);
    })
}

getArticles(articles);