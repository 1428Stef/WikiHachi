let currentLang = 'en';

const translations = {
    en: {
        linkPagesMain: "main",
        linkPagesFavorites: "my-favorites",
        linkPagesPhotos: "photos",

        aboutmeCRDcute: "cute gif (✿◡‿◡)",
        aboutmeCRDtitle: "About me",
        aboutmeCRDtext: `Hi! My name is <span>Stef</span>. I'm passionate about <span>web development</span>, learning the <span>Go language</span>, and I generally love everything related to programming. I'm constantly learning something new — from modern technologies to the <span>English language</span>, which helps me read documentation without pain.
My goal is to become a strong and in-demand programmer. A bit ambitious, but why not aim for the level of Linus Torvalds, right?
I enjoy solving complex problems, creating things from scratch, and watching ideas turn into working code. And this is just the beginning!
<br> <p>aka: <span>1428, 1428Stef, YonHachi</span>.</p><p>he/him</p>`,
        
        myStackTitle: "My stack",
        frontendTitle: "frontend:",
        backendTitle: "backend & language:",
        basicsText: "basics:",
        studyText: "study:",
        openToChallenges: "Open to new challenges and opportunities!",
        
        linksTitle: "links OwO",
        
        githubCalendar: "github calendar ヾ(•ω•`)o",
        
        cardsTitle: "Cards",
        cardsText1: "Each card briefly and clearly displays my skills, social networks, and statistics.",
        cardsText2: "It's a convenient way to quickly find out who I am, what I do, and where I'm heading.",
        
        footerCopyright: "© ∞ YonHachi",
        footerEmoji: "☆*: .｡. o(≧▽≦)o .｡.:*☆"
    },
    ru: {
        linkPagesMain: "главная",
        linkPagesFavorites: "моё-любимое",
        linkPagesPhotos: "фотографии",

        aboutmeCRDcute: "милая гифка (✿◡‿◡)",
        aboutmeCRDtitle: "Обо мне",
        aboutmeCRDtext: `Привет! Меня зовут <span>Стёпа</span>. Я увлечён <span>веб-разработкой</span>, изучаю <span>язык Go</span> и в целом люблю всё, что связано с программированием. Я постоянно учусь чему-то новому — от современных технологий до <span>английского языка</span>, что помогает мне легко читать документацию.
Моя цель — стать сильным и востребованным программистом. Немного амбициозно, но почему бы не стремиться к уровню Линуса Торвальдса, правда?
Мне нравится решать сложные задачи, создавать что-то с нуля и видеть, как идеи превращаются в работающий код. И это только начало!
<br><p>aka: <span>1428, 1428Stef, YonHachi</span>.</p><p>он/его</p>`,
        
        myStackTitle: "Мой стек",
        frontendTitle: "фронтенд:",
        backendTitle: "бэкенд & языки:",
        basicsText: "основы:",
        studyText: "изучаю:",
        openToChallenges: "Открыт для новых вызовов и возможностей!",
        
        linksTitle: "ссылки OwO",
        
        githubCalendar: "github календарь ヾ(•ω•`)o",
        
        cardsTitle: "Карточки",
        cardsText1: "Каждая карточка кратко и наглядно отображает мои навыки, социальные сети и статистику.",
        cardsText2: "Это удобный способ быстро узнать, кто я, чем занимаюсь и куда двигаюсь.",
        
        footerCopyright: "© ∞ YonHachi",
        footerEmoji: "☆*: .｡. o(≧▽≦)o .｡.:*☆"
    }
};



function updateLanguage() {

    document.getElementById('linkPagesMain').textContent = translations[currentLang].linkPagesMain;
    document.getElementById('linkPagesFavorites').textContent = translations[currentLang].linkPagesFavorites;
    document.getElementById('linkPagesPhotos').textContent = translations[currentLang].linkPagesPhotos;


    document.getElementById('aboutmeCRDcute').textContent = translations[currentLang].aboutmeCRDcute;
    document.getElementById('aboutmeCRDtitle').textContent = translations[currentLang].aboutmeCRDtitle;
    document.getElementById('aboutmeCRDtext').innerHTML = translations[currentLang].aboutmeCRDtext;


    document.querySelector('.title-mystack-card span b').textContent = translations[currentLang].myStackTitle;
    document.querySelector('.main-mystack-card h3:nth-of-type(1)').textContent = translations[currentLang].frontendTitle;
    document.querySelector('.main-mystack-card h3:nth-of-type(2)').textContent = translations[currentLang].backendTitle;
    
    
    const frontendItems = document.querySelectorAll('.frontend-list li');
    frontendItems[0].innerHTML = frontendItems[0].innerHTML.replace(/basics:/, translations[currentLang].basicsText);
    frontendItems[1].innerHTML = frontendItems[1].innerHTML.replace(/study:/, translations[currentLang].studyText);
    
    document.querySelector('.main-mystack-card p').textContent = translations[currentLang].openToChallenges;

    
    document.querySelector('.title-links-card span b').textContent = translations[currentLang].linksTitle;

    
    document.querySelector('.title-stats-card span b').textContent = translations[currentLang].githubCalendar;

    
    document.querySelector('.main-text-about-cards h2').textContent = translations[currentLang].cardsTitle;
    const cardsParagraphs = document.querySelectorAll('.main-text-about-cards p');
    cardsParagraphs[0].textContent = translations[currentLang].cardsText1;
    cardsParagraphs[1].textContent = translations[currentLang].cardsText2;

    
    const footerParagraphs = document.querySelectorAll('.footer-copyright p');
    footerParagraphs[0].textContent = translations[currentLang].footerCopyright;
    footerParagraphs[1].textContent = translations[currentLang].footerEmoji;
}

const buttonLanguage = document.getElementById('change-language');

buttonLanguage.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateLanguage();
});



document.addEventListener('DOMContentLoaded', updateLanguage);