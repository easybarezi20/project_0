const hungerNum = document.querySelector('#hungerNumber')
const hungerBtn = document.querySelector('#hungerbutton')
let first = document.querySelector('#first')
let last = document.querySelector('#last')
let starter = document.querySelector('#starter')


let hungerIncrease = setInterval(() => {
    if(finalName.innerHTML != '' && hungerNum.innerHTML < 10){
    gamestart()
    let num = parseInt(hungerNum.innerHTML)
    num += 1
    hungerNum.innerHTML = num
    }else if (hungerNum.innerHTML === '10'){ 
        ifDeath()       
    }
}, 1000) 

hungerBtn.addEventListener('click', () => {
    hungerNum.innerHTML = 0
        }    
);

const sleepNum = document.querySelector('#sleepinessnumber')
const sleepBtn =document.querySelector('#sleepbutton')

let sleepinessIncrease = setInterval(() => {
    if(finalName.innerHTML != '' && sleepNum.innerHTML < 10){
    gamestart()
    let num = parseInt(sleepNum.innerHTML)
    num += 1
    sleepNum.innerHTML = num
    }else if (sleepNum.innerHTML === '10'){
        ifDeath()     
    }
}, 3000)

sleepBtn.addEventListener('click', () => {
    sleepNum.innerHTML = 0
})

const boredomNum = document.querySelector('#boredomnumber')
const boredomBtn = document.querySelector('#playbutton')

let boredomIncrease = setInterval(() => {
    if(finalName.innerHTML != '' && boredomNum.innerHTML < 10){
    gamestart()
    let num = parseInt(boredomNum.innerHTML)
    num += 1
    boredomNum.innerHTML = num
    }else if (boredomNum.innerHTML === '10'){
        ifDeath()       
    }
}, 2000)

boredomBtn.addEventListener('click', () => {
    boredomNum.innerHTML = 0
})

const ageNum = document.querySelector('#agenumber')

let ageIncrease = setInterval(() => {
    if(finalName.innerHTML != ''){
    let num = parseInt(ageNum.innerHTML)
    num += 1
    ageNum.innerHTML = num
        if(last.innerHTML === 'you died!'){
            clearInterval(ageIncrease)
        }
    }
}, 4000)

const form = document.querySelector('#form')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.querySelector('#nameValue')
    const finalName = document.querySelector('#finalName')
    finalName.innerHTML = input.value
    input.value = ''
})

function ifDeath(){
        first.textContent = ''
        last.textContent = 'you died!'
        starter.innerHTML = 'Reload page to play again!'
        hungerNum.innerHTML = 0
        sleepNum.innerHTML = 0
        boredomNum.innerHTML = 0
        clearInterval(sleepinessIncrease)
        clearInterval(hungerIncrease)
        clearInterval(boredomIncrease)    
}
function gamestart(){
    starter.innerHTML = 'If ANY number hits 10 you die!'
}
