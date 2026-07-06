import { morseCode, englishToMorse, morseToEnglish } from './translator.js'

const input = document.querySelector('#input')
const englishBox = document.querySelector('#english-box')
const morseBox = document.querySelector('#morse-box')
const englishOutput = document.querySelector('#english-output')
const morseOutput = document.querySelector('#morse-output')
const toggleEng = document.querySelector('#toggle-english')
const toggleMorse = document.querySelector('#toggle-morse')
const keyboard = document.querySelector('#keyboard')

let mode = 'english'

const QWERTY_ROWS = [
    ['1','2','3','4','5','6','7','8','9','0'],
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M'],
    ['.', ',', '?', '!', '-', '/', '@', '(', ')'],
]

function buildKeyboard(kbMode = 'english') {
    keyboard.innerHTML = ''

    for (const row of QWERTY_ROWS) {
        const rowDiv = document.createElement('div')
        rowDiv.className = 'kb-row'

    for (const char of row) {
        const key = document.createElement('div')
        key.className = 'key'

        const primary = document.createElement('div')
        primary.className = 'key-primary'

        const secondary = document.createElement('div')
        secondary.className = 'key-secondary'

    if (kbMode === 'english') {
        primary.textContent = char
        secondary.textContent = morseCode[char]
    } else {
        primary.textContent = morseCode[char]
        secondary.textContent = char
    }

    key.appendChild(primary)
    key.appendChild(secondary)

    key.addEventListener('click', () => {
        input.value += kbMode === 'english' ? char : morseCode[char]
        input.dispatchEvent(new Event('input'))
})

    rowDiv.appendChild(key)
    }

    keyboard.appendChild(rowDiv)
    }
    }

    input.addEventListener('input', () => {
        const value = input.value
    if (mode === 'english') {
        englishOutput.textContent = value
        morseOutput.textContent = englishToMorse(value)
    } else {
        morseOutput.textContent = value
        englishOutput.textContent = morseToEnglish(value)
        }
    })

    input.addEventListener('keydown', (e) => {
        if (mode === 'morse') {
        const morse = morseCode[e.key.toUpperCase()]
        if (morse) {
            e.preventDefault()
            input.value += morse + ' '
            input.dispatchEvent(new Event('input'))
            }
        }
    })

toggleEng.addEventListener('click', () => {
    mode = 'english'
    input.value = ''
    englishOutput.textContent = ''
    morseOutput.textContent = ''
    englishBox.classList.remove('muted')
    englishBox.classList.add('active')
    morseBox.classList.remove('active')
    morseBox.classList.add('muted')
    buildKeyboard('english')
    toggleEng.classList.add('active')
    toggleMorse.classList.remove('active')
})

toggleMorse.addEventListener('click', () => {
    mode = 'morse'
    input.value = ''
    englishOutput.textContent = ''
    morseOutput.textContent = ''
    englishBox.classList.remove('active')
    englishBox.classList.add('muted')
    morseBox.classList.remove('muted')
    morseBox.classList.add('active')
    buildKeyboard('morse')
    toggleMorse.classList.add('active')
    toggleEng.classList.remove('active')
})

buildKeyboard('english')