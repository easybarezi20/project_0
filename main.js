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




console.log(hungerBtn)
hungerBtn.addEventListener('click', () => {
    hungerNum.innerHTML = 0
})