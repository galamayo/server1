const quizData = [
    {
        question: 'Dans quelle ville se trouve l atomium',
        a: 'Bruxelles',
        b: 'Garoua',
        c: 'Yaounde',
        d: 'Paris',
        correct: 'a'
    }, {
        question: 'Quelle est la nationalite de Stromae',
        a: 'Belge',
        b: 'Allemende',
        c: 'Camerounaise',
        d: 'Tchadienne',
        correct: 'a'
    }, {
        question: 'Combien de regions a la belgique',
        a: '3',
        b: '1',
        c: '4',
        d: '2',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sublitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;    
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

sublitBtn.addEventListener("click", () => {
   
    const answer = getSelected();
    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
        loadQuiz();
        }else{
            quiz.innerHTML = "<h2>You answered correctly at "+ score + "/"+quizData.length+ " questions.</h2>"
            + "<button onclick=location.reload()" + ">Reload</button>";
         
        }
        
    }
    
    
})
