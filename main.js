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
console.log(sleepNum)
let sleepinessIncrease = setInterval(() => {
    if(sleepNum.innerHTML < 10){
    let num = parseInt(sleepNum.innerHTML)
    num += 1
    sleepNum.innerHTML = num
    }else if (sleepNum.innerHTML === 10){
        clearInterval(hungerIncrease)
        
    }
}, 1000)