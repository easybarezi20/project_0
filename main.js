const hungerNum = document.querySelector('#hungerNumber')
const hungerBtn = document.querySelector('#hungerbutton')
let first = document.querySelector('#first')
let last = document.querySelector('#last')


let hungerIncrease = setInterval(() => {
    if(hungerNum.innerHTML < 10){
    let num = parseInt(hungerNum.innerHTML)
    num += 1
    hungerNum.innerHTML = num
    }else if (hungerNum.innerHTML === 10){ 
        first.textContent = ''
        last.textContent = 'you died!'
        clearInterval(hungerIncrease)
    }
}, 1000)

hungerBtn.addEventListener('click', () => {
    hungerNum.innerHTML = 0
})

const sleepNum = document.querySelector('#sleepinessnumber')
const sleepBtn =document.querySelector('#sleepbutton')

let sleepinessIncrease = setInterval(() => {
    if(sleepNum.innerHTML < 10){
    let num = parseInt(sleepNum.innerHTML)
    num += 1
    sleepNum.innerHTML = num
    }else if (sleepNum.innerHTML === '10'){
        let first = document.querySelector('#first')
        let last = document.querySelector('#last')
        first.textContent = ''
        last.textContent = 'you died!'
        clearInterval(hungerIncrease)
        
    }
}, 1000)

sleepBtn.addEventListener('click', () => {
    sleepNum.innerHTML = 0
})

const boredomNum = document.querySelector('#boredomnumber')
const boredomBtn = document.querySelector('#playbutton')

let boredomIncrease = setInterval(() => {
    if(boredomNum.innerHTML < 10){
    let num = parseInt(boredomNum.innerHTML)
    num += 1
    boredomNum.innerHTML = num
    }else if (boredomNum.innerHTML === '10'){
        let first = document.querySelector('#first')
        let last = document.querySelector('#last')
        first.textContent = ''
        last.textContent = 'you died!'
        clearInterval(hungerIncrease)
        
    }
}, 2000)

boredomBtn.addEventListener('click', () => {
    boredomNum.innerHTML = 0
})

const ageNum = document.querySelector('#agenumber')

let ageIncrease = setInterval(() => {
    let num = parseInt(ageNum.innerHTML)
    num += 1
    ageNum.innerHTML = num
    
}, 5000)

const form = document.querySelector('#form')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.querySelector('#nameValue')
    const finalName = document.querySelector('#finalName')
    finalName.innerHTML = input.value
    input.value = ''
})

// function death() {
//     if(hungerNum.innerHTML === 10){
//         let first = document.querySelector('#first')
//          let last = document.querySelector('#last')
//          first.textContent = ''
//          last.textContent = 'you died!'
//     }
// }
// death()
// console.log(typeof hungerNum)