const formSubmit = document.querySelector("input[type=submit]")
const form = document.querySelector("form")
const inputDepth1 = document.querySelector('#ddepth1')
const inputDepth2 = document.querySelector('#ddepth2')
const inputDuration1 = document.querySelector('#dduration1')
const inputDuration2 = document.querySelector('#dduration2')
const inputInterval = document.querySelector('#interval')
const checkbox = document.querySelector('#second_dive')
const results = document.querySelector('.results')
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
    return result
}

formSubmit.addEventListener('click', handleSubmit)

function handleSubmit(e) {
    if (!inputDepth1.value || !inputDuration1.value) return
    results.innerHTML = ""
    e.preventDefault()
    const refDepth1 = next(inputDepth1.value, Mn90Prof)
    if (!refDepth1) {
        results.innerHTML = `<div>This dive depth does not exist in the table!</div>`
        return
    }
    const refDuration1 = next(inputDuration1.value, Mn90T[refDepth1])
    if (!refDuration1) {
        results.innerHTML = `<div>This dive time does not exist in the ${refDepth1}m table!</div>`
        return
    }
    firstDiveStop = Mn90P[refDepth1 +""+ refDuration1]

    results.innerHTML = `<div><h3>First dive</h3>
    <p>Reference depth : ${refDepth1}m</p>
    <p>Reference duration : ${refDuration1}min</p>
    ${displayDivingStop(firstDiveStop)}</div>`
    
    if (firstDiveStop[5] === '*') {
        results.innerHTML = `<div>This successive dive is prohibited by the tables for security reasons.</div>`
        return
    }
    if (secondDive) {
        if (!inputDepth2.value || !inputDuration2.value) return
        const refInterval = posNext(inputInterval.value, Mn90Interval)
        console.log(firstDiveStop[5]);
        const refCoef = posNext(Mn90Cr[firstDiveStop[5]][refInterval], TbCoeff)

        const refDepth2 = next(inputDepth2.value, Mn90Prof2)
        if (!refDepth2) {
            results.innerHTML = `<div>This dive depth does not exist in the table!</div>`
            return
        }
        const increase = Majo[refDepth2][refCoef]
        const refDuration2 = next(Number(inputDuration2.value) + increase, Mn90T[refDepth2])
        if (!refDuration2) {
            results.innerHTML = `<div>This dive time does not exist in the ${refDepth2}m table!</div>`
            return
        }
        let secondDiveStop = Mn90P[refDepth2 +""+ refDuration2]

        results.innerHTML += `<div><h3>Second dive</h3>
        <p>Reference depth : ${refDepth2}m</p>
        <p>Reference duration : ${refDuration2}min</p>
        ${displayDivingStop(secondDiveStop)}</div>`
    }
}
