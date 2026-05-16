const btn = document.getElementById('start');
const content = document.getElementById('missioncontent');
const sound = document.getElementById('launchSound');
const hoverSound = document.getElementById('glitter');
const allCards = document.querySelectorAll('.card,.icon');

btn.addEventListener('click', function() {
    sound.play();
    content.classList.add('show-content');
    content.scrollIntoView({ behavior: 'smooth' });
    let name = document.getElementById("userName").value;
    if (name === "") {
        name = "Hero";
    }
    let message = "Mission  Starts  Now , Agent " + name + " ! 🚀";
    document.getElementById('mass').innerHTML = message;
    document.getElementById("userName").style.display = "none";
    btn.style.display = "none";
});

function text(element) {
    const currentText = element.querySelector('.info');
    const allTexts = document.querySelectorAll('.info');

    allTexts.forEach((item) => {
        if (item !== currentText) {
            item.classList.add("hidden");
        }
    });
    currentText.classList.toggle("hidden");
}

allCards.forEach(function(card) {
    
    
    card.addEventListener('mouseenter', function() {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    card.addEventListener('mouseleave', function() {
        hoverSound.pause();
    });
});