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
const themes = [
    'light', 'dark', 'forest'
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

let currentTheme = Number(localStorage.getItem('theme')) || 0
let currentdifficulty = Number(localStorage.getItem('difficulty')) || 2
let urinishQoldi = 0
let urinish = 0
let urinishBerildi = 0
let myNum = 0
let start = 0
let end = 0

const setTheme = () => {document.documentElement.dataset.theme = themes[currentTheme];bodyToggle.innerHTML = themeIcons[currentTheme]};setTheme()
const checked111 = localStorage.getItem('prankmode')
const restarter = () => {
    display_change('flex', 'none', 'none', 'none')

    urinish = 0
    urinishQoldi = 0
    urinishBerildi = 0
    myNum = 0

    usernum.value = ''
    qolgan.innerText = ''
    visualFoiz2.style.width = '0%'

    resultDisplay.innerText = 'Inputga tahminingizni yozing.'
}
const hideset = () => settings.classList.toggle('hidden')
const hideabo = () => about.classList.toggle('hidden')
const winning = () => {
    if (prankmode.checked) {
        terrorwin.currentTime = 0
        terrorwin.play()
    }
        
    resultate.innerText = `Barakalla siz yutdingiz. Son:${myNum}, urinnish:${urinish}`
    display_change('none','none','flex', 'none')
}

function display_change(q, w, e, r) {
    start_card.style.display = q
    game_card.style.display = w
    win_card.style.display = e
    lose_card.style.display = r
}

function getRandomInt(k, l) {
    return Math.floor(Math.random() * (l - k + 1)) + k;
}

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen?.().catch(() => {});
    }
}

prankmode.checked = checked111 === 'true'
difficulty.value = currentdifficulty
bell.innerHTML = prankmode.checked ? bells[0] : bells[1]

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

        resultDisplay.innerText = `Men o'ylagan son ${usersnum} dan kattaroq.`
    } else if (usersnum > myNum) {
        if (prankmode.checked && urinishQoldi>1) {
            faa.currentTime = 0
            faa.play()
        }

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
        result222.innerText = `Barakalla ammo siz yutqazdingiz. Son:${myNum}`
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

difficulty.addEventListener('change', () => {
    const hards = [
        'Oson', 'Normal', 'Qiyin'
    ]
    difficultyText.innerText = hards[difficulty.value-1]
    localStorage.setItem('difficulty', difficulty.value)
})