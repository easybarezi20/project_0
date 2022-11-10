const hungerNum = document.querySelector('#hungerNumber')


function headerIncrease() {
    let num = parseInt(hungerNum.innerHTML)
    num += 1
    hungerNum.innerHTML = num
}
setInterval(headerIncrease, 1000)