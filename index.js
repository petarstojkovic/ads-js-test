const adContainers = document.querySelectorAll('[data-type="ad"]')

const cardContainers = document.querySelectorAll('[data-type="bet"]')

adContainers.forEach((adContainer) => {

    const adCard = document.createElement("div")
    adCard.className = "ad-card"
    adContainer.appendChild(adCard)
    
    const adCardBtnDiv = document.createElement("div")
    adCardBtnDiv.className = "close"
    adCard.appendChild(adCardBtnDiv)
    
    const adCardBtn = document.createElement("button")
    adCardBtn.className = "x"
    adCardBtn.id = "toggleButton"
    adCardBtnDiv.appendChild(adCardBtn)
    
    const adCardBtnTxt = document.createElement("h4")
    adCardBtnTxt.innerHTML = "x"
    adCardBtn.appendChild(adCardBtnTxt)
    
    const adCardLink = document.createElement("a")
    adCardLink.addEventListener('click', () => {
        window.open(location.href = "#")
    });
    adCard.appendChild(adCardLink)
    
    const adCardTitle = document.createElement("h1")
    adCardTitle.className = "betting-card-ad"
    adCardTitle.innerHTML = "betting ad"
    adCardLink.appendChild(adCardTitle)
    
    let imagePath = ['basketball.png', 'football.png', 'rugby.png']
    let currentIndex = 0

    const adCardImg = document.createElement("img")
    adCardImg.className = "sports"
    adCardImg.alt = "ad-sports"
    adCardImg.src = 'img/' + imagePath[currentIndex]
    const changeAdImg = (value) => {
        currentIndex += value
        if (currentIndex < 0) {
            currentIndex = imagePath.length - 1
        }
        if (currentIndex > imagePath.length - 1) {
            currentIndex = 0
        }
        adCardImg.src = 'img/' + imagePath[currentIndex]
    }
    adCardLink.appendChild(adCardImg)
    setInterval(() => {
        changeAdImg(1)
    }, 1000);

    const adCardText = document.createElement("p")
    adCardText.className="loremipsum"
    adCardText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis error culpa, atque quam natus dolor reiciendis, aliquam exercitationem corporis magni consectetur, voluptatem maxime sit saepe! Excepturi quo illo esse sit, adipisci necessitatibus!"
    adCardLink.appendChild(adCardText)

    const adCardBtnDiv2 = document.createElement("div")
    adCardBtnDiv2.className = "ad-btn-div"
    adCard.appendChild(adCardBtnDiv2)
    
    const adCardBtn2 = document.createElement("button")
    adCardBtn2.innerHTML = "click to see more"
    adCardBtn2.className = "ad-btn"
    adCardBtn2.addEventListener('click', () => {
        window.open(location.href = "#")
    });
    adCardBtnDiv2.appendChild(adCardBtn2)
})
cardContainers.forEach((cardContainer) => {
    const card = document.createElement("div")
    card.className = "card"
    cardContainer.appendChild(card)
    
    const cardLink = document.createElement("a")
    cardLink.addEventListener('click', () => {
        window.open(location.href = "#")
    });
    card.appendChild(cardLink)
    
    const cardTitle = document.createElement("h1")
    cardTitle.className = "betting-card"
    cardTitle.innerHTML = "betting card"
    cardLink.appendChild(cardTitle)
    
    const cardImg = document.createElement("img")
    cardImg.className = "pl"
    cardImg.src = "./img/pl.png"
    cardImg.alt = "premier-league"
    cardLink.appendChild(cardImg)
    
    const cardText = document.createElement("p")
    cardText.className="loremipsum"
    cardText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptate nihil nisi molestias et, ipsum distinctio magnam dignissimos incidunt nesciunt aliquam, minus quidem recusandae vitae unde."
    cardLink.appendChild(cardText)
})

const toggleButtons = document.querySelectorAll(".x");
toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const adContainer = button.closest(".ad-container");
        if (adContainer) {
            const adMuteContainer = document.createElement('div');
            adMuteContainer.className="container-ad-mute"
            
            const adProvider = document.createElement('p');
            adProvider.innerHTML = 'Ads by Google';
            adProvider.style.color = "lightgray"
            adProvider.style.marginBottom = "10px"
            adMuteContainer.appendChild(adProvider);

            const whyThisAdBtn = document.createElement('button');
            whyThisAdBtn.className= "btn"
            whyThisAdBtn.innerHTML = 'Why this ad';
            whyThisAdBtn.addEventListener('click', () => {
                window.open(location.href = "#")
            });
            adMuteContainer.appendChild(whyThisAdBtn);

            const stopShowingAdBtn = document.createElement('button');
            stopShowingAdBtn.className = "btn"
            stopShowingAdBtn.innerHTML = 'Stop seeing this ad';
            stopShowingAdBtn.addEventListener('click', () => {
                adContainer.style.display = 'none';
            });
            adMuteContainer.appendChild(stopShowingAdBtn);
            
            adContainer.innerHTML = '';
            adContainer.appendChild(adMuteContainer);
        }
    });
});
