function startQuiz() {
  document.querySelector('#chooseChallenge').style.display = 'none'
  document.querySelector('#quizStart').style.display = 'block'

}

play.addEventListener('click', playStart)

function playStart() {

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
    c1.addEventListener('click', c1Start)
    c2.addEventListener('click', c2Start)
    c3.addEventListener('click', c3Start)
    c4.addEventListener('click', c4Start)
}

let c0
let c1
let c2
let c3
let c4
let quizStart = document.querySelector('#quizStart')


const final = document.querySelector('#outFinal')

//quiz 1

let quizAux = 0
let tryCounter = 3
let erro = 0
let tryCounterAux = true

function c0Start() {
  assuQuiz = 'Astronomia'
  //verifica se já passou por todas as perguntas
  if (quizAux >= 15) {
    final.textContent = `Acabou de finalizar o QuizJS. Conquistou ${erro} erros em um total de 15 perguntas.`
    quizAux = 0
    finalMens()
    btHome()
    return;
  }
  //verifica se ainda tem chances
  if (tryCounter <= 0 && tryCounterAux == true) {
    tryCounter = 1
    tryCounterAux = false
    quizAux = 0
    outAviso()

  }

  if (tryCounter <= 0 && tryCounterAux == false) {
    quizAux = 0
    tryCounter = 1
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
    erro++
    tryCounter--
    setTimeout(() => {
      r2.style.background = '#0CA70C'
      c0Start()
    }, 300)
  })

  r3.addEventListener('click', () => {
    r3.style.background = '#f00'
    erro++
    tryCounter--
    setTimeout(() => {
      r3.style.background = '#0CA70C'
      c0Start()
    }, 300)
  })

  r4.addEventListener('click', () => {
    erro++
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


//quiz 2
let quiz2Aux = 0
let tryCounter2 = 3
let tryCounter2Aux = true
let erro2 = 0

function c1Start() {
  assuQuiz = 'Geografia'
  if (quiz2Aux >= 15) {
    final.textContent = `Acabou de finalizar o QuizJS. Conquistou ${erro2} erros em um total de 15 perguntas.`
    quiz2Aux = 0
    finalMens()
    btHome()
    return;
  }
  //verifica se ainda tem chances
  if (tryCounter2 <= 0 && tryCounter2Aux == true) {
    tryCounter2 = 1
    tryCounter2Aux = false
    quiz2Aux = 0
    outAviso()
  }

  if (tryCounter2 <= 0 && tryCounter2Aux == false) {
    quiz2Aux = 0
    tryCounter2 = 1
  }

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
    <h1>${quizGeo[quiz2Aux].quest}</h1>
  `
  for (var i = 0; i < aux.length; i++) {
    quizStart.innerHTML += `
      <p><input type="button" value="${quizGeo[quiz2Aux].res[aux[i]]}" id="r${aux[i]}"></p>
    `
  }

  startQuiz()
  r1 = document.querySelector('#r1')
  r2 = document.querySelector('#r2')
  r3 = document.querySelector('#r3')
  r4 = document.querySelector('#r4')

  r1.addEventListener('click', () => {
    quiz2Aux++
    r1.style.background = '#00ff4e'

    setTimeout(() => {
      r1.style.background = '#0CA70C'
      c1Start()
    }, 300)


  })

  r2.addEventListener('click', () => {
    r2.style.background = '#f00'
    erro2++
    tryCounter2--
    setTimeout(() => {
      r2.style.background = '#0CA70C'
      c1Start()
    }, 300)
  })

  r3.addEventListener('click', () => {
    r3.style.background = '#f00'
    erro2++
    tryCounter2--
    setTimeout(() => {
      r3.style.background = '#0CA70C'
      c1Start()
    }, 300)
  })

  r4.addEventListener('click', () => {
    erro2++
    r4.style.background = '#f00'

    tryCounter2--
    setTimeout(() => {
      r4.style.background = '#0CA70C'
      c1Start()
    }, 300)
  })






}




let quiz3Aux = 0
let tryCounter3 = 3
let tryCounter3Aux = true
let erro3 = 0
//quiz 3
function c2Start() {
  assuQuiz = 'História'
  //verifica se já passou por todas as perguntas
  if (quiz3Aux >= 15) {
    final.textContent = `Acabou de finalizar o QuizJS. Conquistou ${erro3} erros em um total de 15 perguntas.`
    quiz3Aux = 0
    finalMens()
    btHome()
    return;
  }
  //verifica se ainda tem chances
  if (tryCounter3 <= 0 && tryCounter3Aux == true) {
    tryCounter3 = 1
    tryCounter3Aux = false
    quiz3Aux = 0
    outAviso()

  }

  if (tryCounter3 <= 0 && tryCounter3Aux == false) {
    quiz3Aux = 0
    tryCounter3 = 1
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
      <h1>${quizHistG[quiz3Aux].quest}</h1>
    `
    for (var i = 0; i < aux.length; i++) {
      quizStart.innerHTML += `
        <p><input type="button" value="${quizHistG[quiz3Aux].res[aux[i]]}" id="r${aux[i]}"></p>
      `
    }

    startQuiz()
    r1 = document.querySelector('#r1')
    r2 = document.querySelector('#r2')
    r3 = document.querySelector('#r3')
    r4 = document.querySelector('#r4')

    r1.addEventListener('click', () => {
      quiz3Aux++
      r1.style.background = '#00ff4e'

      setTimeout(() => {
        r1.style.background = '#0CA70C'
        c2Start()
      }, 300)


    })

    r2.addEventListener('click', () => {
      r2.style.background = '#f00'
      erro3++
      tryCounter3--
      setTimeout(() => {
        r2.style.background = '#0CA70C'
        c2Start()
      }, 300)
    })

    r3.addEventListener('click', () => {
      r3.style.background = '#f00'
      erro3++
      tryCounter3--
      setTimeout(() => {
        r3.style.background = '#0CA70C'
        c2Start()
      }, 300)
    })

    r4.addEventListener('click', () => {
      erro3++
      r4.style.background = '#f00'

      tryCounter3--
      setTimeout(() => {
        r4.style.background = '#0CA70C'
        c2Start()
      }, 300)
    })


}











//quiz 4
let quiz4Aux = 0
let erro4 = 0
let tryCounter4 = 3
let tryCounter4Aux = true


function c3Start() {
  assuQuiz = 'Conhecimentos Gerais'
  //verifica se já passou por todas as perguntas
  if (quiz4Aux >= 15) {
    final.textContent = `Acabou de finalizar o QuizJS. Conquistou ${erro4} erros em um total de 21 perguntas.`
    quiz4Aux = 0
    finalMens()
    btHome()
    return;
  }
  //verifica se ainda tem chances
  if (tryCounter4 <= 0 && tryCounter4Aux == true) {
    tryCounter4 = 1
    tryCounter4Aux = false
    quiz4Aux = 0
    outAviso()

  }

  if (tryCounter4 <= 0 && tryCounter4Aux == false) {
    quiz4Aux = 0
    tryCounter4 = 1
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
      <h1>${quizConG[quiz4Aux].quest}</h1>
    `
    for (var i = 0; i < aux.length; i++) {
      quizStart.innerHTML += `
        <p><input type="button" value="${quizConG[quiz4Aux].res[aux[i]]}" id="r${aux[i]}"></p>
      `
    }

    startQuiz()
    r1 = document.querySelector('#r1')
    r2 = document.querySelector('#r2')
    r3 = document.querySelector('#r3')
    r4 = document.querySelector('#r4')

    r1.addEventListener('click', () => {
      quiz4Aux++
      r1.style.background = '#00ff4e'

      setTimeout(() => {
        r1.style.background = '#0CA70C'
        c3Start()
      }, 300)
    })

    r2.addEventListener('click', () => {
      r2.style.background = '#f00'
      erro4++
      tryCounter4--
      setTimeout(() => {
        r2.style.background = '#0CA70C'
        c3Start()
      }, 300)
    })

    r3.addEventListener('click', () => {
      r3.style.background = '#f00'
      erro4++
      tryCounter4--
      setTimeout(() => {
        r3.style.background = '#0CA70C'
        c3Start()
      }, 300)
    })

    r4.addEventListener('click', () => {
      erro4++
      r4.style.background = '#f00'

      tryCounter4--
      setTimeout(() => {
        r4.style.background = '#0CA70C'
        c3Start()
      }, 300)
    })




}

//quiz 5
let quiz5Aux = 0
let tryCounter5 = 3
let tryCounter5Aux = true
let erro5 = 0
function c4Start() {
  assuQuiz = 'Mitologias (egipcía, grega e nórdica)'
  //verifica se já passou por todas as perguntas
  if (quiz5Aux >= 15) {
    final.textContent = `Acabou de finalizar o QuizJS. Conquistou ${erro5} erros em um total de ${quizEspecial.length} perguntas.`
    quiz5Aux = 0
    finalMens()
    btHome()
    return;
  }
  //verifica se ainda tem chances
  if (tryCounter5 <= 0 && tryCounter5Aux == true) {
    tryCounter5 = 1
    tryCounter5Aux = false
    quiz5Aux = 0
    outAviso()
  }

  if (tryCounter5 <= 0 && tryCounter5Aux == false) {
    quiz5Aux = 0
    tryCounter5 = 1
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
      <h1>${quizEspecial[quiz5Aux].quest}</h1>
    `
    for (var i = 0; i < aux.length; i++) {
      quizStart.innerHTML += `
        <p><input type="button" value="${quizEspecial[quiz5Aux].res[aux[i]]}" id="r${aux[i]}"></p>
      `
    }

    startQuiz()
    r1 = document.querySelector('#r1')
    r2 = document.querySelector('#r2')
    r3 = document.querySelector('#r3')
    r4 = document.querySelector('#r4')

    r1.addEventListener('click', () => {
      quiz5Aux++
      r1.style.background = '#00ff4e'

      setTimeout(() => {
        r1.style.background = '#0CA70C'
        c4Start()
      }, 300)
    })

    r2.addEventListener('click', () => {
      r2.style.background = '#f00'
      erro5++
      tryCounter5--
      setTimeout(() => {
        r2.style.background = '#0CA70C'
        c4Start()
      }, 300)
    })

    r3.addEventListener('click', () => {
      r3.style.background = '#f00'
      erro5++
      tryCounter5--
      setTimeout(() => {
        r3.style.background = '#0CA70C'
        c4Start()
      }, 300)
    })

    r4.addEventListener('click', () => {
      erro5++
      r4.style.background = '#f00'

      tryCounter5--
      setTimeout(() => {
        r4.style.background = '#0CA70C'
        c4Start()
      }, 300)
    })


}
