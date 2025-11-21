const kaomojiElement = document.getElementById('kaomoji')

kaomojiElement.addEventListener('click', function() {
    kaomojiElement.textContent = kaomojRandom()
})

function kaomojRandom() {
    const rnd = ['(✧ω✧)','(￣▽￣)','(⁄ ⁄•⁄ω⁄•⁄ ⁄)', '(μ_μ)', '૮₍ ˶• ༝ •˶ ₎ა', 'VladTHK GANDON',]
    return rnd[Math.floor(Math.random() * rnd.length)]
}