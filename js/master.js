//Start game

//variável para mostrar o assunto do Quiz no final do jogo, em sua tela de vitória
let assuQuiz = ``

//desafios pré-definidos
challange = [
  'Astronomia',
  'Geografia',
  'História',
  'Conhecimentos gerais',
  'Mitologias'
]

//botão de iniciar e const para retomar à tela inicial
const play = document.querySelector('#play')
const home = document.querySelector('#home')

home.addEventListener('click', btHome)

function btHome() {
  document.querySelector('.chooseChallenge').style.display = 'none'
  document.querySelector('#quizStart').style.display = 'none'
  document.querySelector('.homescreen').style.display = 'flex'
}





//mensagens
//final
const concluirFinal = document.querySelector('#finalOK')
concluirFinal.addEventListener('click', btConcluirFinal)

function btConcluirFinal() {
  document.querySelector('#inNome').disabled = true
  document.querySelector('footer').style.display = 'block'
  concluirFinal.style.background = 'rgba(0,0,0,0)'
  concluirFinal.value = `${assuQuiz}`
  concluirFinal.disabled = true;

}

function btConcluirFinal_() {
  document.querySelector('#inNome').disabled = false
  document.querySelector('footer').style.display = 'none'
  concluirFinal.value = `Concluir`
  concluirFinal.style.background = '#0abb0a'
  concluirFinal.disabled = false;
}


//botão de X
const x = document.querySelector('.x')
x.addEventListener('click', finalMens)
let auxFin = 0


//mensagens de chances
const btOk = document.querySelector('#avisoOK')
btOk.addEventListener('click', outAviso)
let auxMen = 0


function finalMens() {
  btConcluirFinal_()
  if (auxFin % 2 == 0) {
    document.querySelector('.mensagens').style.display = 'block'
    document.querySelector('.final').style.display = 'block'
    auxFin++
  } else {
    document.querySelector('.mensagens').style.display = 'none'
    document.querySelector('.final').style.display = 'none'
    auxFin++
  }

}

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
