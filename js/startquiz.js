function startQuiz() {
  document.querySelector('#chooseChallenge').style.display = 'none'
  document.querySelector('#quizStart').style.display = 'block'

}

play.addEventListener('click', playStart)

function playStart() {
  {
    document.querySelector('.chooseChallenge').style.display = 'block'
    document.querySelector('#chooseChallenge').style.display = 'block'
    document.querySelector('.homescreen').style.display = 'none'
    document.querySelector('#quizStart').style.display = 'none'

    let chooseChallenge = document.querySelector('#chooseChallenge')
    let challanges = ``
    chooseChallenge.innerHTML =
    `
      <header>
        <h1>Escolha o desafio:</h1>
      </header>
    `

    for (var i = 0; i < challange.length; i++) {
       challanges = `${challange[i]}`
       chooseChallenge.innerHTML += `<p><input type="button" id="c${i}" value="${challanges}"></p>`

    }
    c0 = document.querySelector('#c0')
    c1 = document.querySelector('#c1')
    c2 = document.querySelector('#c2')
    c3 = document.querySelector('#c3')
    c4 = document.querySelector('#c4')

    c0.addEventListener('click', c0Start)
}}

let c0
let c1
let c2
let c3
let c4
let quizStart = document.querySelector('#quizStart')
let quizAux = 0
let tryCounter = 3

function c0Start() {
  //verifica se ainda tem chances
  if (tryCounter <= 0) {
    tryCounter = 1
    quizAux = 0
    alert('Suas tentativas acabaram. O jogo retornará da primeira pergunta. Você só tem uma chance de agora em diante.')
    playStart()
  }
  //ordem das questões
  let aux = []
  let o

  for (aux; aux.length < 4;) {
    o = Math.ceil(Math.random () * 4)
    if (aux.indexOf(o) < 0) {
      aux.push(o)
    }
  }
// -----------------------
//innerHTML

  quizStart.innerHTML = `
    <h1>${quiz[quizAux].quest}</h1>
  `
  for (var i = 0; i < aux.length; i++) {
    quizStart.innerHTML += `
      <p><input type="button" value="${quiz[quizAux].res[aux[i]]}" id="r${aux[i]}"></p>
    `
  }

  startQuiz()
  r1 = document.querySelector('#r1')
  r2 = document.querySelector('#r2')
  r3 = document.querySelector('#r3')
  r4 = document.querySelector('#r4')

  r1.addEventListener('click', () => {
    quizAux++
    r1.style.background = '#00ff4e'

    setTimeout(() => {
      r1.style.background = '#0CA70C'
      c0Start()
    }, 300)


  })

  r2.addEventListener('click', () => {
    r2.style.background = '#f00'

    tryCounter--
    setTimeout(() => {
      r2.style.background = '#0CA70C'
      c0Start()
    }, 300)
  })

  r3.addEventListener('click', () => {
    r3.style.background = '#f00'

    tryCounter--
    setTimeout(() => {
      r3.style.background = '#0CA70C'
      c0Start()
    }, 300)
  })

  r4.addEventListener('click', () => {
    r4.style.background = '#f00'

    tryCounter--
    setTimeout(() => {
      r4.style.background = '#0CA70C'
      c0Start()
    }, 300)
  })

}

//respostas
let r1
let r2
let r3
let r4
