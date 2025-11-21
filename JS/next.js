const cards = document.querySelectorAll('.card-a');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let activeIndex = 0;

function setActiveCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    setActiveCard(activeIndex);
});

nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % cards.length;
    setActiveCard(activeIndex);
});

