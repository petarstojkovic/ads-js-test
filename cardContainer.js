const cardContainers = document.querySelectorAll('[data-type="bet"]')

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