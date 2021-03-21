//Start game

challange = [
  '15 perguntas de astronomia',
  '15 perguntas de geografia',
  '15 perguntas de história',
  '15 perguntas',
  'especial'
]

const play = document.querySelector('#play')
const home = document.querySelector('#home')

home.addEventListener('click', btHome)

function btHome() {
  document.querySelector('.chooseChallenge').style.display = 'none'
  document.querySelector('#quizStart').style.display = 'none'
  document.querySelector('.homescreen').style.display = 'block'
}





//mensagens


const btOk = document.querySelector('#avisoOK')
btOk.addEventListener('click', outAviso)
let auxMen = 0


function outAviso() {
    if (auxMen % 2 == 0) {
      document.querySelector('.mensagens').style.display = 'block'
      document.querySelector('.aviso').style.display = 'block'
      auxMen++
      return
    } else {
      document.querySelector('.aviso').style.display = 'none'
      document.querySelector('.mensagens').style.display = 'none'
      auxMen++
      return
    }
}
