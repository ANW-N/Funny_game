const setToggle = document.getElementById('settoggle')
const settings = document.getElementById('settings')
const abouttoggle = document.getElementById('abouttoggle')
const about = document.getElementById('about')
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
const lose = new Audio('audios/lose.ogg')
const qolgan = document.getElementById('qoldi')
const visualFoiz2 = document.getElementById('vfoiz2')
const result222 = document.getElementById('res2')
const restart2 = document.getElementById('restart2')
const bell = document.getElementById('bell')
const headerTrigger = document.getElementById('header-trigger')
const header = document.querySelector('header')
const difficulty = document.getElementById('difficulty')
const difficultyText = document.getElementById('difficultyText')
const landingStart = document.getElementById('landing-start')
const landing = document.getElementById('landing')
const games = document.getElementById('games')
const wins = document.getElementById('wins')
const best = document.getElementById('best')
const stats = JSON.parse(localStorage.getItem('stats')) || {wins: 0, best: 0, games:0}
const home = document.getElementById('home')
const update = () => {games.innerText = stats.games; best.innerText = stats.best; wins.innerText = stats.wins}
update()
const difficultyIcons = document.getElementById('difficulty-icons')
const bgm = document.getElementById("bgm");
let bgmEnabled = localStorage.getItem('bgm') || 'true'
const bgmIcon = document.getElementById('sound')
const themes = [
    'light', 'dark', 'forest'
]
const hards = [
    'Oson', 'Normal', 'Qiyin'
]
const hardClasses = [
    'easy', 'norm', 'hard'
]
const themeIcons = [
    `<i class="fa-solid fa-sun fa-spin"></i>`,
    `<i class="fa-solid fa-moon fa-shake"></i>`,
    `<i class="fa-solid fa-tree fa-flip"></i>`
]
const bells = [
    `<i class="fa-solid fa-bell"></i>`,
    `<i class="fa-solid fa-bell-slash"></i>`
]

const volumes = [
    `<i class="fa-solid fa-volume-high"></i>`,
    `<i class="fa-solid fa-volume-xmark"></i>`
]
const iconsHardLevel = [
    `<i class="fa-solid fa-face-smile"></i>`,
    `<i class="fa-solid fa-face-grimace"></i>`,
    `<i class="fa-solid fa-skull"></i>`
]
const shadows = [
    `inset 0 12px 20px #0f0`,
    `inset 0 12px 20px #fb0`,
    `inset 0 12px 20px #f00`
]
const volumeChange = () => {
    if (bgmEnabled === 'true') {bgmIcon.innerHTML = volumes[0]}
    else {bgmIcon.innerHTML = volumes[1]}
}; volumeChange()
const colors = [
    "#0f0",
    "#fb0",
    "#f00"
]

let currentTheme = Number(localStorage.getItem('theme')) || 0
let currentdifficulty = Number(localStorage.getItem('difficulty')) || 2
let urinishQoldi = 0
let urinish = 0
let urinishBerildi = 0
let myNum = 0
let start = 0
let end = 0
let startX = 0
let endX = 0

const setTheme = () => {document.documentElement.dataset.theme = themes[currentTheme];bodyToggle.innerHTML = themeIcons[currentTheme]};setTheme()
const checked111 = localStorage.getItem('prankmode') || 'true'
const restarter = () => {
    display_change('flex', 'none', 'none', 'none')

    urinish = 0
    urinishQoldi = 0
    urinishBerildi = 0
    myNum = 0

    usernum.value = ''
    qolgan.innerText = ''
    visualFoiz2.style.width = '0%'

    lose.pause()
    lose.currentTime = 0

    resultDisplay.innerText = 'Inputga tahminingizni yozing.'
}
const hideset = () => settings.classList.toggle('hidden')
const hideabo = () => about.classList.toggle('hidden')
const winning = () => {
    if (prankmode.checked) {
        terrorwin.currentTime = 0
        terrorwin.play()
    }

    stats.wins++
    stats.best = Math.max(stats.best, (urinishQoldi))
    localStorage.setItem('stats', JSON.stringify(stats))
    update()
        
    resultate.innerText = `Barakalla siz yutdingiz. 🔢Son: ${myNum}, urinnish: ${urinish}`
    display_change('none','none','flex', 'none')
}

function display_change(q, w, e, r) {
    start_card.style.display = q
    game_card.style.display = w
    win_card.style.display = e
    lose_card.style.display = r
}
function render() { 
    difficultyIcons.style.boxShadow = shadows[currentdifficulty-1]
    prankmode.checked = checked111 === 'true'? true:false
    difficulty.value = currentdifficulty
    difficultyIcons.innerHTML = iconsHardLevel[currentdifficulty-1]
    difficultyText.innerText = hards[currentdifficulty-1]
    difficultyText.classList.add(hardClasses[currentdifficulty-1])
    bell.innerHTML = prankmode.checked ? bells[0] : bells[1]
    difficulty.style.setProperty("--difficulty-color", colors[currentdifficulty-1]);
}
render()
function getRandomInt(k, l) {
    return Math.floor(Math.random() * (l - k + 1)) + k;
}

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen?.().catch(() => {});
    }
}

//events
bodyToggle.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length
    document.documentElement.dataset.theme = themes[currentTheme]
    localStorage.setItem('theme', currentTheme)
    bodyToggle.innerHTML = themeIcons[currentTheme]
})

prankmode.addEventListener('change', () => {
    localStorage.setItem('prankmode', `${prankmode.checked}`)
    if (prankmode.checked) {
        bell.innerHTML = bells[0]
    }
    else {
        bell.innerHTML = bells[1]
    }
})

setToggle.addEventListener('click', hideset)
hideSet.addEventListener('click', hideset)

abouttoggle.addEventListener('click', hideabo)
hideAbo.addEventListener('click', hideabo)

startbtn.addEventListener('click', function() {
    if (!(starter.value && ender.value)) {alert("Inputlarni to'ldiring!"); return}
    start = Number(starter.value)
    end = Number(ender.value)

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        alert("Faqat butun son kiriting!")
        return
    }

    if (end - start + 1 < 10) {
        alert("Oraliq kamida 10 ta sondan iborat bo‘lishi kerak!")
        return
    }
    if (start > end) {
        alert("To'g'ri kiriting! Boshlanish soni tugash sonidan kichik bo'lishi kerak.");
        return
    }

    myNum = getRandomInt(start, end)

    const on = (end - start +1)
    
    if (prankmode.checked) {
        startsound.currentTime = 0
        startsound.play()
    }

    urinishBerildi = Math.ceil(Math.log2(on)) - Number(difficulty.value)+1

    urinishQoldi=urinishBerildi
    qolgan.innerText = urinishQoldi
    display_change('none','flex','none', 'none')
    visualFoiz2.style.width = `100%`

    stats.games++
    localStorage.setItem('stats', JSON.stringify(stats))
    update()
})

subber.addEventListener('click', function() {
    if (!usernum.value) {alert("Tahminingizni yozishiniz shart!"); return}
    let usersnum = Number(usernum.value)
    if (!Number.isInteger(usersnum)) {
        alert("Butun son kiriting!")
        usernum.focus()
        return
    }
    if (usersnum < start || usersnum > end) {
        alert(`Iltimos, ${start} va ${end} orasidagi sonni kiriting!`)
        usernum.focus()
        return
    }
    
    urinish += 1
    
    if (usersnum < myNum) {
        if (prankmode.checked  && urinishQoldi>1) {
            faa.currentTime = 0
            faa.play()
        }
        navigator.vibrate(200);

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kattaroq.`
    } else if (usersnum > myNum) {
        if (prankmode.checked && urinishQoldi>1) {
            faa.currentTime = 0
            faa.play()
        }
        navigator.vibrate(200);

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kichikroq.`
    } else {
        winning()
        return
    }

    usernum.value = ''
    usernum.focus()

    urinishQoldi -= 1
    qolgan.innerText = urinishQoldi

    visualFoiz2.style.width = `${Math.floor(urinishQoldi*100/(urinishBerildi))}%`

    if (urinishQoldi <= 0) {
        display_change('none','none','none','flex')
        lose.currentTime = 0
        lose.play()
        result222.innerText = `Barakalla ammo siz yutqazdingiz. 🔢Son: ${myNum}`
        return
    }
})

restart.addEventListener('click', restarter)
restart2.addEventListener('click', restarter)

usernum.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        subber.click()
    }
})

starter.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        ender.focus()
    }
})

ender.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        startbtn.click()
    }
})

headerTrigger.addEventListener('click', () => {
    header.classList.toggle('visible')
})

startbtn.addEventListener('click', () => {
    enterFullscreen();
})

document.addEventListener('click', (e) => {
  if (
    !settings.contains(e.target) &&
    !setToggle.contains(e.target) &&
    !bodyToggle.contains(e.target)
  ) {
    settings.classList.remove('hidden')
  }
  if (
    !about.contains(e.target) &&
    !abouttoggle.contains(e.target) &&
    !bodyToggle.contains(e.target)
  ) {
    about.classList.remove('hidden')
  }
})

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
})
document.addEventListener('touchend', (e) => {
    if ((endX - startX) > 80) {
        settings.classList.add('hidden')
    }
    if ((endX - startX) < -80) {
        settings.classList.remove('hidden')
    }
})
document.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
})

landingStart.addEventListener('click', () => {display_change('flex','none','none','none');landing.style.display = 'none';
    if (bgmEnabled === 'true') {
        bgm.volume = 0.25;
        bgm.play();
    }
})
home.addEventListener('click', () => {
    display_change('none','none','none','none');landing.style.display = 'flex'
})

bgmIcon.addEventListener('click', () => {
    bgmEnabled = bgmEnabled === 'true' ? 'false' : 'true'
    localStorage.setItem('bgm', bgmEnabled)
    volumeChange()
    if (bgmEnabled === 'false') {
        bgm.pause()
        bgm.currentTime = 0
    } else {bgm.play()}
})
function updateDifficulty() {}
difficulty.addEventListener("input", () => {
    const value = Number(difficulty.value);

    difficultyText.classList.remove(hardClasses[currentdifficulty-1])
    difficultyText.classList.add(hardClasses[value-1])
    difficultyIcons.innerHTML = iconsHardLevel[value-1]
    difficultyIcons.style.boxShadow = shadows[value-1]
    difficultyText.innerText = hards[value-1]
    localStorage.setItem('difficulty', value)
    currentdifficulty = value

    difficulty.style.setProperty("--difficulty-color", colors[currentdifficulty-1]);
});
