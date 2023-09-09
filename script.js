const formSubmit = document.querySelector("input[type=submit]")
const form = document.querySelector("form")
const inputDepth1 = document.querySelector('#ddepth1')
const inputDepth2 = document.querySelector('#ddepth2')
const inputDuration1 = document.querySelector('#dduration1')
const inputDuration2 = document.querySelector('#dduration2')
const inputInterval = document.querySelector('#interval')
const checkbox = document.querySelector('#second_dive')
const results = document.querySelector('.results')
const variables = document.querySelector('.variables')
const errors = document.querySelector('.errors')
let secondDive = false
let firstDiveStop = []

checkbox.addEventListener('change', handleSecondDive)
function handleSecondDive(e) {
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
        result += `<p>3m stop : ${divingStop[0]}min</p>`
    if (divingStop[1])
        result += `<p>6m stop : ${divingStop[1]}min</p>`
    if (divingStop[2])
        result += `<p>9m stop : ${divingStop[2]}min</p>`
    if (divingStop[3])
        result += `<p>12m stop : ${divingStop[3]}min</p>`
    if (divingStop[4])
        result += `<p>15m stop : ${divingStop[4]}min</p>`
    return result ? result : "No dive stop required"
}

formSubmit.addEventListener('click', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    try {
        if (!inputDepth1.value || !inputDuration1.value || inputDepth1.value <= 0 || inputDuration1.value <= 0) 
            throw new Error(`<div>Depth and Duration values must be positive</div>`)
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

function calculate() {
    const refDepth1 = next(inputDepth1.value, Mn90Prof)
    if (!refDepth1)
        throw new Error(`<div>There is no table for this depth (${inputDepth1.value}m)</div>`)
    addVariable(`Reference depth for ${inputDepth1.value} meters`, refDepth1, "m")
    const refDuration1 = next(inputDuration1.value, Mn90T[refDepth1])
    if (!refDuration1) 
        throw new Error(`<div>This dive time (${inputDuration1.value}min) does not exist in the ${refDepth1}m table</div>`)
    addVariable(`Reference duration for ${inputDuration1.value} minutes`, refDuration1, "min")

    firstDiveStop = Mn90P[refDepth1 +""+ refDuration1]
    addVariable(`GPS for ${refDuration1} minutes in the ${refDepth1} meters table`, firstDiveStop[5])

    results.innerHTML = `<div><h3>First dive</h3>
    ${displayDivingStop(firstDiveStop)}</div>`
    
    if (secondDive && inputDepth2.value && inputDuration2.value) {
        if (firstDiveStop[5] === '*') 
            throw new Error(`<div>This successive dive is prohibited by the tables for security reasons</div>`)
        
        if (inputDepth2.value <= 0 || inputDuration2.value <= 0) 
            throw new Error(`<div>Depth and Duration values must be positive</div>`)
        const refIntervalPos = posPrev(inputInterval.value, Mn90Interval)
        const refInterval = prev(inputInterval.value, Mn90Interval)
        if (!refInterval && Number(inputInterval.value) < 15) {
            results.innerHTML = ""
            variables.innerHTML = ""

            const realDepth = Math.max(inputDepth1.value, inputDepth2.value)
            const refDepth = next(realDepth, Mn90Prof)
            if (!refDepth)
                throw new Error(`<div>There is no table for this depth (${realDepth}m)</div>`)
            addVariable(`Reference depth for ${realDepth} meters`, refDepth, "m")
            const realDuration = Number(inputDuration1.value) + Number(inputDuration2.value)
            const refDuration = next(realDuration, Mn90T[refDepth])
            if (!refDuration) 
                throw new Error(`<div>This dive time (${realDuration}min) does not exist in the ${refDepth}m table</div>`)
            addVariable(`Reference duration for ${realDuration} minutes`, refDuration, "min")
        
            firstDiveStop = Mn90P[refDepth +""+ refDuration]
        
            results.innerHTML = `<div><h3>First dive</h3>
            ${displayDivingStop(firstDiveStop)}</div>`

            return
        }
        addVariable(`Reference interval for ${inputInterval.value} minutes`, refInterval, "min")

        const nitCoef = Mn90Cr[firstDiveStop[5]][refIntervalPos]
        const refCoefPos = posNext(nitCoef, TbCoeff)
        const refCoef = next(nitCoef, TbCoeff)
        addVariable(`Reference residual nitrogen coefficient for ${nitCoef}`, refCoef)

        const refDepth2 = next(inputDepth2.value, Mn90Prof2)
        if (!refDepth2)
            throw new Error(`<div>There is no table for this depth (${inputDepth2.value}m)</div>`)
        addVariable(`Reference depth for ${inputDepth2.value} meters`, refDepth2, "m")

        const increase = Majo[refDepth2][refCoefPos]
        addVariable(`Second dive increase`, increase, "min")

        const increasedDuration = Number(inputDuration2.value) + increase
        const refDuration2 = next(increasedDuration, Mn90T[refDepth2])
        if (!refDuration2)
            throw new Error(`<div>This dive time (${refDuration2}) does not exist in the ${refDepth2}m table</div>`)
        addVariable(`Reference duration for ${increasedDuration} minutes`, refDuration2, "min")
        let secondDiveStop = Mn90P[refDepth2 +""+ refDuration2]

        results.innerHTML += `<div><h3>Second dive</h3>
        ${displayDivingStop(secondDiveStop)}</div>`
    }
}

function addVariable(label, value, unit = "") {
    variables.innerHTML += `<p>${label} : <span>${value}${unit}</span></p>`
}