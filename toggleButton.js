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
