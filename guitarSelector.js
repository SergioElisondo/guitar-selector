const guitarLeft = document.querySelector('#guitarLeft')
const guitarMid = document.querySelector('#guitarMid')
const guitarRight = document.querySelector('#guitarRight')

document.querySelector('#guitarOne').addEventListener('click', guitarOne)
document.querySelector('#guitarTwo').addEventListener('click', guitarTwo)
document.querySelector('#guitarThree').addEventListener('click', guitarThree)

function guitarOne(){
    guitarRight.classList.add('hidden')
    guitarMid.classList.add('hidden')
    guitarLeft.classList.toggle('hidden')
}

function guitarTwo(){
    guitarRight.classList.add('hidden')
    guitarLeft.classList.add('hidden')
    guitarMid.classList.toggle('hidden')
}

function guitarThree(){
    guitarLeft.classList.add('hidden')
    guitarMid.classList.add('hidden')
    guitarRight.classList.toggle('hidden')
}