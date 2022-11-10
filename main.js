const hungerNum = document.querySelector('#hungerNumber')

let hungerIncrease = setInterval(() => {
    let num = parseInt(hungerNum.innerHTML)
    num += 1
    hungerNum.innerHTML = num
    if (hungerNum.innerHTML == 10){
        clearInterval(hungerIncrease)
    }
}, 1000)

const hungerBtn = document.querySelector('#hungerbutton')
console.log(hungerBtn)