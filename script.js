let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = itens.length -1

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

    let dotsOld = container.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    itens[active].classList.add('active')
}

prevButton.onclick = () =>{
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    itens[active].classList.add('active')
}