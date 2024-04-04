function next(needle, haystack) {
    const sorted = haystack.sort((a, b) => a - b)
    return sorted.find(number => number >= needle)
}

function posNext(needle, haystack) {
    const sorted = haystack.sort((a, b) => a - b)
    return sorted.findIndex(number => number >= needle)
}

function prev(needle, haystack) {
    const sorted = haystack.sort((a, b) => a - b)
    return sorted.reverse().find(number => number <= needle)
}

function posPrev(needle, haystack) {
    const sorted = haystack.sort((a, b) => a - b)
    return haystack.length - sorted.reverse().findIndex(number => number <= needle)
}

function displayDivingStop(divingStop) {
    let result = ""
    if (divingStop[0])
        result += `<p>3${dictionary.m} : ${divingStop[0]}${dictionary.min}</p>`
    if (divingStop[1])
        result += `<p>6${dictionary.m} : ${divingStop[1]}${dictionary.min}</p>`
    if (divingStop[2])
        result += `<p>9${dictionary.m} : ${divingStop[2]}${dictionary.min}</p>`
    if (divingStop[3])
        result += `<p>12${dictionary.m} : ${divingStop[3]}${dictionary.min}</p>`
    if (divingStop[4])
        result += `<p>15${dictionary.m} : ${divingStop[4]}${dictionary.min}</p>`
    return result ? result : dictionary.Ndsr
}

const checkbox = document.querySelector('#second_dive')
checkbox.addEventListener('change', handleSecondDive)
function handleSecondDive() {
    secondDive = !secondDive
    const secondDiveInputs = document.querySelectorAll('div[data-second_dive]')
    secondDiveInputs.forEach(input => {
        if (secondDive) {
            input.style.display = "block"
        } else {
            input.style.display = "none"
        }
    })
}

const assoTable = {
    'd1' : 'ddepth1',
    't1' : 'dduration1',
    'i' : 'interval',
    'd2' : 'ddepth2',
    't2' : 'dduration2',
}
window.addEventListener("load", handleLoad);

function handleLoad(e) {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('local')) {
        const local = urlParams.get('local')

        if (['FR', 'EN'].includes(local) && localStorage.getItem('lang') !== local) {
            handleSwitchLang(e)
        }
    }

    for (const entry of urlParams.entries()) {
        if (Object.keys(assoTable).indexOf(entry[0]) !== -1) {
            const element = document.querySelector(`input[name=${assoTable[entry[0]]}]`)
            element.value = entry[1]
        }
    }

    if (urlParams.has('i') && urlParams.get('i') !== ''
        || urlParams.has('d2') && urlParams.get('d2') !== ''
        || urlParams.has('t2') && urlParams.get('t2') !== '' ) {
        checkbox.checked = 'on'
        handleSecondDive()
        handleSubmit(e)
    }

    if (urlParams.has('d1') && urlParams.get('d1') !== ''
        || urlParams.has('t1') && urlParams.get('t1') !== '' ) {
        handleSubmit(e)
    }
}

const formSubmit = document.querySelector("input[type=submit]")
formSubmit.addEventListener('click', handleSubmit)

const inputDepth1 = document.querySelector('#ddepth1')
const inputDuration1 = document.querySelector('#dduration1')
const results = document.querySelector('.results')
const variables = document.querySelector('.variables')
const errors = document.querySelector('.errors')
function handleSubmit(e) {
    e.preventDefault()
    try {
        results.innerHTML = ""
        variables.innerHTML = ""
        errors.innerHTML = ""
        calculate()
    } catch (e) {
        results.innerHTML = ""
        variables.innerHTML = ""
        errors.innerHTML = e.message
    }
}

const inputDepth2 = document.querySelector('#ddepth2')
const inputDuration2 = document.querySelector('#dduration2')
const inputInterval = document.querySelector('#interval')
let secondDive = false
let firstDiveStop = []
function calculate() {
    if (!inputDepth1.value || !inputDuration1.value || inputDepth1.value <= 0 || inputDuration1.value <= 0) {
        throw new Error(`<div>${dictionary.Dadvmbp}</div>`)
    }
    firstDiveStop = calculateSimpleDive(dictionary.Fd, inputDepth1.value, inputDuration1.value)

    if (secondDive && inputDepth2.value && inputDuration2.value) {
        if (firstDiveStop[5] === '*')
            throw new Error(`<div>${dictionary.Tsdipbttfsr}</div>`)
        if (inputDepth2.value <= 0 || inputDuration2.value <= 0)
            throw new Error(`<div>${dictionary.Dadvmbp}</div>`)
        const refIntervalPos = posPrev(inputInterval.value, Mn90Interval) - 1 // -1 because Mn90Cr is 1 indexed
        const refInterval = prev(inputInterval.value, Mn90Interval)
        if (!refInterval && Number(inputInterval.value) < 15) {
            results.innerHTML = ""
            variables.innerHTML = ""

            firstDiveStop = calculateSimpleDive(dictionary.Fd, Math.max(inputDepth1.value, inputDepth2.value), Number(inputDuration1.value) + Number(inputDuration2.value))
            return
        }
        if (!Mn90Cr[firstDiveStop[5]][refIntervalPos]) {
            calculateSimpleDive(dictionary.Sd, inputDepth2.value, inputDuration2.value)
            return
        }
        addVariable(`${dictionary.Rif} ${minToHour(inputInterval.value)}`, minToHour(refInterval))

        const nitCoef = Mn90Cr[firstDiveStop[5]][refIntervalPos]
        const refCoefPos = posNext(nitCoef, TbCoeff)
        const refCoef = next(nitCoef, TbCoeff)
        addVariable(`${dictionary.Rrncf} ${nitCoef}`, refCoef)

        const refDepth2 = next(inputDepth2.value, Mn90Prof2)
        if (!refDepth2)
            throw new Error(`<div>${dictionary.Tintftd} (${inputDepth2.value}${dictionary.m})</div>`)
        addVariable(`${dictionary.Rdf} ${inputDepth2.value} ${dictionary.meters}`, refDepth2, `${dictionary.m}`)

        const increase = Majo[refDepth2][refCoefPos]
        addVariable(`${dictionary.Sdi}`, minToHour(increase))

        const increasedDuration = Number(inputDuration2.value) + increase
        const refDuration2 = next(increasedDuration, Mn90T[refDepth2])
        if (!refDuration2)
            throw new Error(`<div>${dictionary.Tdtdneitt.replace(':1:', increasedDuration).replace(':2:', refDepth2)}</div>`)
        addVariable(`${dictionary.Rduf} ${minToHour(increasedDuration)}`, minToHour(refDuration2))
        let secondDiveStop = Mn90P[refDepth2 +""+ refDuration2]

        results.innerHTML += `<div><h3>${dictionary.Sd}</h3>
        ${displayDivingStop(secondDiveStop)}</div>`
    }
}

function addVariable(label, value, unit = "") {
    variables.innerHTML += `<p>${label} : <span>${value}${unit}</span></p>`
}

function calculateSimpleDive(label, inputDepth, inputDuration) {
    const refDepth = next(inputDepth, Mn90Prof)
    if (!refDepth)
        throw new Error(`<div>${dictionary.Tintftd} (${inputDepth}${dictionary.m})</div>`)
    addVariable(`${dictionary.Rdf} ${inputDepth} ${dictionary.meters}`, refDepth, `${dictionary.m}`)
    const refDuration = next(inputDuration, Mn90T[refDepth])
    if (!refDuration)
        throw new Error(`<div>${dictionary.Tdtdneitt.replace(':1:', inputDuration).replace(':2:', refDepth)}</div>`)
    addVariable(`${dictionary.Rduf} ${minToHour(inputDuration)}`, minToHour(refDuration))

    const diveStop = Mn90P[refDepth +""+ refDuration]
    addVariable(`${dictionary.GPSfxmitxmt.replace(':1:', refDuration).replace(':2:', refDepth)}`, diveStop[5])

    results.innerHTML += `<div><h3>${label}</h3>
    ${displayDivingStop(diveStop)}</div>`

    return diveStop
}

const lang = document.querySelector('.lang')
lang.addEventListener('click', handleSwitchLang)

function handleSwitchLang(e) {
    e.preventDefault()
    if (localStorage.getItem('lang') === "FR") {
        localStorage.setItem('lang', 'EN')
    } else {
        localStorage.setItem('lang', 'FR')
    }
    updateTrad(localStorage.getItem('lang'))
    if (firstDiveStop.length !== 0) {
        handleSubmit(e)
    }
}

const alert = document.querySelector('.alert')
const closeAlert = document.querySelector('.alert .close')

closeAlert.addEventListener('click', e => {
    e.preventDefault()
    alert.style.display = 'none'
    document.cookie = `${encodeURIComponent('disable-alert')}=${encodeURIComponent('1')};expires=${(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)).toUTCString()}`
})

if (doesCookieExist('disable-alert') && getCookieValue('disable-alert')) {
    alert.style.display = 'none'
}

function doesCookieExist(name) {
    return document.cookie
        .replace(/\s/g, "").split(';')
        .map(cookie => cookie.split('=')[0])
        .find(cookie => cookie === encodeURIComponent(name))
}

function getCookieValue(name) {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1]
}

const share = document.querySelector('.share')
share.addEventListener('click', handleShare)

let lockShare = false
function handleShare(e) {
    e.preventDefault()
    let params = []
    for (const key in assoTable) {
        const input = document.querySelector(`input[name=${assoTable[key]}]`)
        if (input.value) {
            params[key] = input.value
        }
    }

    let link = `${location.host+location.pathname}?local=${localStorage.getItem('lang')}`
    for (const key in params) {
        link += "&" + key + "=" + params[key]
    }

    navigator.clipboard.writeText(link).then(() => {
        if(lockShare) return
        lockShare = true
        share.classList.add("active")

        setTimeout(() => {
            share.classList.remove("active")
            lockShare = false
        }, 1500)
    })
}

function minToHour(value) {
    const hours = Math.floor(value / 60)
    const minutes = value % 60
    if (hours === 0)
        return `${value} ${dictionary.min}`
    if (minutes === 0)
        return `${hours}h`

    return `${Math.floor(value / 60)}h${value % 60}`
}
