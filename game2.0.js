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

const hideSet = document.getElementById('hideset')
const hideAbo = document.getElementById('hideabo')

const resultDisplay = document.getElementById('result')

const subber = document.getElementById('subber')
const usernum = document.getElementById('usernum')

const resultdisp = document.getElementById('redult')

const restart = document.getElementById('restart')
const resultate = document.getElementById('res')

const terrorwin = new Audio('4_5982449789000747791.ogg')
let my_num = 0

const prankmode = document.getElementById('prankset')
const startsound = new Audio('4_5984615874152106750.ogg')

bodyToggle.addEventListener('click', function() {
    body.classList.toggle('dark')
})

const hideset = () => {settings.classList.toggle('hidden')}
const hideabo = () => {about.classList.toggle('hidden')}

setToggle.addEventListener('click', hideset)
hideSet.addEventListener('click', hideset)

abouttoggle.addEventListener('click', hideabo)
hideAbo.addEventListener('click', hideabo)

const faa = new Audio('audio_2026-08-10_12-01-38.wav')

let myNum = 0
let urinish = 0
        
function getRandomInt(k, l) {
    return Math.floor(Math.random() * (l - k + 1)) + k;
}

function display_change(q, w, e) {
    start_card.style.display = q
    game_card.style.display = w
    win_card.style.display = e
}

startbtn.addEventListener('click', function() {
    if (!(starter.value || ender.value)) {alert("Inputlarni to'ldiring!"); return}
    start = parseInt(starter.value); end = parseInt(ender.value)
    if (start > end) {alert("To'g'ri kiriting! Boshlanish < Tugash"); return}

    myNum = getRandomInt(start, end)
    
    if (prankmode.checked) {
        startsound.currentTime = 0
        startsound.play()
    }
    display_change('none','flex','none')
})

subber.addEventListener('click', function() {
    if (!usernum.value) {alert("Tahminingizni yozishiniz shart!"); return}
    usersnum = parseInt(usernum.value)
    urinish += 1
    if (usersnum < myNum) {
        if (prankmode.checked) {
            faa.currentTime = 0
            faa.play()
        }

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kattaroq.`
    } else if (usersnum > myNum) {
        if (prankmode.checked) {
            faa.currentTime = 0
            faa.play()
        }

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kichikroq.`
    } else {
        if (prankmode.checked) {
            terrorwin.currentTime = 0
            terrorwin.play()
        }
        
        resultate.innerText = `Barakalla siz yutdingiz. Son:${myNum}, urinnish:${urinish}`
        display_change('none','none','flex')
    }

    usernum.value = ''
    usernum.focus()
})

restart.addEventListener('click', () => {display_change('flex', 'none', 'none');urinish=0;resultDisplay.innerText='Inputga tahminingizni yozing.'})
