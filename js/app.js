'use strict';

//Method to move the images into the slider by pressing the button

const grande = document.querySelector('.slider-box')
const punto = document.querySelectorAll('.punto') 

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -50
        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('active')
        })
        punto[i].classList.add('active')
    })
})