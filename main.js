const hungerNum = document.querySelector('#hungerNumber')
const hungerBtn = document.querySelector('#hungerbutton')

let hungerIncrease = setInterval(() => {
    if(hungerNum.innerHTML < 10){
    let num = parseInt(hungerNum.innerHTML)
    num += 1
    hungerNum.innerHTML = num
    }else if (hungerNum.innerHTML === 10){
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
    }else if (sleepNum.innerHTML === 10){
        clearInterval(hungerIncrease)
        
    }
}, 3000)

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
    }else if (boredomNum.innerHTML === 10){
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
    
}, 1000)