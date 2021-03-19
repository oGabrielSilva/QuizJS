//Start game

challange = [15, 25, 50]
const play = document.querySelector('#play')
const home = document.querySelector('#home')

home.addEventListener('click', () => {
  document.querySelector('.chooseChallenge').style.display = 'none'
  document.querySelector('.homescreen').style.display = 'block'
})

play.addEventListener('click', () => {
  document.querySelector('.chooseChallenge').style.display = 'block'
  document.querySelector('.homescreen').style.display = 'none'

  let chooseChallenge = document.querySelector('#chooseChallenge')
  let challanges = ``

  for (var i = 0; i < challange.length; i++) {
     challanges = `Desafio de ${challange[i]} perguntas.`
     chooseChallenge.innerHTML += `<p><input type="button" id="C${i}" value="${challanges}"></p>`
  }


})
