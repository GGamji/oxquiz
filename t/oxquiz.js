const quiz = [
  {
    question : '달팽이도 이빨이 있다.',
    answer: 'O'
  },{
    question: '지하철 1량 (칸)에는 출입문이 모두 8개이다',
    answer: 'O'
  },{
    question: '셰익스피어 희곡 햄릿의 주인공인 햄릿은 네덜란드 사람이다',
    answer: 'X',
    description: '12세기 덴마크 왕자'
  },{
    question: '말도 잠을 잘 때는 사람과 같이 코를 곤다',
    answer: 'O'
  },{
    question: '북두칠성은 시계의 반대 방향으로 회전한다.',
    answer: 'O'
  },{
    question: '딸기는 장미과에 속한다',
    answer: 'O'
  },{
    question: '금강산은 경치가 아름다워 사계절마다 불리우는 이름이 다르다',
    answer: 'O',
    description: '봄 : 금강산, 가을: 풍악산, 여름: 봉래산, 겨울:개골산'
  }
]
let currentQuestionIndex = 0
const quizStart = document.querySelector('.quiz_start')
const introWrap = document.querySelector('#intro')
const quizWrapper = document.querySelector('#quiz_wrapper')
const question = quizWrapper.querySelector('.question')

question.innerHTML = quiz[currentQuestionIndex].question;

quizStart.addEventListener('click', function() {
  introWrap.style.display = 'none';
  quizWrapper.style.display = 'block'
})