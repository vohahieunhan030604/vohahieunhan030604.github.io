const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //******Viet code o day*********************
  setNextQuestion()
  //****************************************
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 //******Viet code o day*********************
 currentQuestionIndex = 0
  //****************************************
  questionContainerElement.classList.remove('hide')
   //******Viet code o day*********************
   setNextQuestion()
  //****************************************
}

function setNextQuestion() {
   //******Viet code o day*********************
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
  //****************************************
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: 'Vừa bằng hạt đỗ, ăn giỗ cả làng. Là con gì ?',
    answers: [
      { text: 'con chó', correct: false },
      { text: 'con gà', correct: false },
      { text: 'con ruồi', correct: true }
    ]
  },
  {
    question: ' Nắng lửa mưa dầu tôi đâu bỏ bạn. Tối lửa tắt đèn sao bạn lại bỏ tôi. Đó là cái gì?',
    answers: [
      { text: 'cái ghế', correct: false },
      { text: 'cái cặp', correct: false },
      { text: 'cái bóng', correct: true },
      { text: 'cái bật lửa', correct: false }
    ]
  },
  {
    question: 'Mặt gì mát dịu đêm nay,Cây đa, chú cuội, đứng đây rõ ràng?',
    answers: [
      { text: 'mặt mọc', correct: false },
      { text: 'mặt trăng', correct: true },
      { text: 'mặt tiền', correct: false },
      { text: 'Không có', correct: false }
    ]
  },
  {
    question: 'Con gì đầu dê mình ốc?',
    answers: [
      { text: 'Con chó', correct: false },
      { text: 'Con dốc', correct: true },
      { text: 'Không có', correct: false }
    ]
  }
]
