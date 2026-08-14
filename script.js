const setToggle = document.getElementById('settoggle')
const settings = document.getElementById('settings')

const abouttoggle = document.getElementById('abouttoggle')
const about = document.getElementById('about')

const body = document.body
const bodyToggle = document.getElementById('togthe')

const startbtn = document.getElementById('start-game')
const starter = document.getElementById('snum')
const ender = document.getElementById('enum')

const start_card = document.getElementById('start')
const game_card = document.getElementById('game')
const win_card = document.getElementById('win')
const lose_card = document.getElementById('lose')

const hideSet = document.getElementById('hideset')
const hideAbo = document.getElementById('hideabo')

const resultDisplay = document.getElementById('result')

const subber = document.getElementById('subber')
const usernum = document.getElementById('usernum')

const restart = document.getElementById('restart')
const resultate = document.getElementById('res')

const prankmode = document.getElementById('prankset')

const startsound = new Audio('audios/4_5984615874152106750.ogg')
const terrorwin = new Audio('audios/4_5982449789000747791.ogg')
const faa = new Audio('audios/audio_2026-08-10_12-01-38.wav')
const glass_garden = new Audio('audios/glass_garden.wav')
const lose = new Audio('audios/lose.ogg')

const qolgan = document.getElementById('qoldi')
const visualFoiz2 = document.getElementById('vfoiz2')
const result222 = document.getElementById('res2')

const restart2 = document.getElementById('restart2')
const themes = [
    'light', 'dark', 'forest'
]

let currentTheme = localStorage.getItem('theme') || 0
let urinishQoldi = 0
let urinishBerildi = 0

const setTheme = () => {document.documentElement.dataset.theme = themes[currentTheme]}
setTheme()
bodyToggle.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length
    document.documentElement.dataset.theme = themes[currentTheme]
    localStorage.setItem('theme', currentTheme)
})

const music = document.getElementById('music')
let chalinmoqda = false

let s = 0, e = 0, on=0

let my_num = 0
let myNum = 0
let urinish = 0

const hideset = () => {settings.classList.toggle('hidden')}
const hideabo = () => {about.classList.toggle('hidden')}

function display_change(q, w, e, r) {
    start_card.style.display = q
    game_card.style.display = w
    win_card.style.display = e
    lose_card.style.display = r
}

const winning = () => {
    if (prankmode.checked) {
        terrorwin.currentTime = 0
        terrorwin.play()
    }
        
    resultate.innerText = `Barakalla siz yutdingiz. Son:${myNum}, urinnish:${urinish}`
    display_change('none','none','flex', 'none')
}

setToggle.addEventListener('click', hideset)
hideSet.addEventListener('click', hideset)

abouttoggle.addEventListener('click', hideabo)
hideAbo.addEventListener('click', hideabo)
        
function getRandomInt(k, l) {
    return Math.floor(Math.random() * (l - k + 1)) + k;
}

startbtn.addEventListener('click', function() {
    if (!(starter.value && ender.value)) {alert("Inputlarni to'ldiring!"); return}
    start = parseInt(starter.value); end = parseInt(ender.value)
    if ((start > end) || !((end-start+1)>=10)) {alert("To'g'ri kiriting! Boshlanish soni tugash sonidan katta bo'lishi kerak va orasida kamida 10 ta son bo'lishi kerak."); return}

    myNum = getRandomInt(start, end)

    s=start
    e=end

    on = (end - start +1)
    
    if (prankmode.checked) {
        startsound.currentTime = 0
        startsound.play()
    }

    if (10000>=on && on>1000) {urinishBerildi=30}
    else if (1000>=on && on>100) {urinishBerildi=20}
    else if (100>=on && on>50) {urinishBerildi=10}
    else if (50>=on && on>=10) {urinishBerildi=5}
    else {urinishBerildi=40}

    urinishQoldi=urinishBerildi
    qolgan.innerText = urinishQoldi
    display_change('none','flex','none', 'none')
    foiz999 = Math.floor(urinishQoldi*100/(urinishBerildi))
    visualFoiz2.style.width = `${foiz999}%`
})

function getProsent(s, e, on) {
    let returnres = Math.floor(100-(((e-s-1) *100)/on))
    console.log(returnres)
    return returnres
}

subber.addEventListener('click', function() {
    if (!usernum.value) {alert("Tahminingizni yozishiniz shart!"); return}
    
    usersnum = parseInt(usernum.value)
    urinish += 1
    if (usersnum < myNum) {
        if (prankmode.checked  && urinishQoldi>1) {
            faa.currentTime = 0
            faa.play()
        }

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kattaroq.`
        s = usersnum
    } else if (usersnum > myNum) {
        if (prankmode.checked && urinishQoldi>1) {
            faa.currentTime = 0
            faa.play()
        }

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kichikroq.`
        e=usersnum
    } else {
        winning()
    }

    usernum.value = ''
    usernum.focus()

    urinishQoldi -= 1
    qolgan.innerText = urinishQoldi

    foiz999 = Math.floor(urinishQoldi*100/(urinishBerildi))
    visualFoiz2.style.width = `${foiz999}%`

    if (urinishQoldi <= 0) {
        display_change('none','none','none','flex')
        lose.currentTime = 0
        lose.play()
        result222.innerText = `Barakalla ammo siz yutqazdingiz. Son:${myNum}`
        return
    }
})

const restarter = () => {display_change('flex', 'none', 'none', 'none');urinish=0;resultDisplay.innerText='Inputga tahminingizni yozing.';visualFoiz.style.width = '0%';foiz.innerText=0;yutish_foizi=0}
restart.addEventListener('click', restarter)
restart2.addEventListener('click', restarter)

music.addEventListener('click', () => {
    if (chalinmoqda) {glass_garden.pause();music.innerText='🎵';chalinmoqda=false}
    else {glass_garden.currentTime=0; glass_garden.play(); music.innerText='🔇';chalinmoqda=true}
})
