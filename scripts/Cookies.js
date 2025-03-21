import { darkBg, normalBg } from './darkBg.js';


function buttonOfCookie(){
  
  const body = document.querySelector('body')

  const main = document.querySelector('.main-container')

  const button = document.querySelector('.cookie-button')

  const cookieContainer = document.querySelector('.main-cookie-container')

  const xButton = document.querySelector('.close-button')


  button.addEventListener('click', () => {
    cookieContainer.classList.add('removeContainer')
    body.classList.remove('restrict-scroll')
    normalBg(main)
    cookieContainer.addEventListener('animationend', () => {
      cookieContainer.style.display = 'none'
      cookieContainer.classList.remove('shadow')
    })
  })

  xButton.addEventListener('click', () => {
    cookieContainer.style.display = 'none'
    normalBg(main)
  })

  darkBg(main)

}

buttonOfCookie()