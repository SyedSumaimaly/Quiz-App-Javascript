const quiz = [
    {
        question: "Q1: HTML is what type of language?",
        a: "Scripting Language",
        b: "Markup Language",
        c: "Programming Language",
        d: "Network Protocol",
        ans: "ans2"
    },
    {
        question: "Q2: HTML uses?",
        a: "User defined tags",
        b: "Pre-specified tags",
        c: "Fixed tags defined by the language",
        d: "Tags only for linking",
        ans: "ans3"
    },
    {
        question: "Q3: Fundamental HTML Block is known as ___________.",
        a: "HTML Body",
        b: "HTML Tag",
        c: "HTML Attribute",
        d: "HTML Element",
        ans: "ans2"
    },
    {
        question: "Q4: Apart from <b> tag, what other tag makes text bold ?",
        a: "<fat>",
        b: "<strong>",
        c: "<black>",
        d: "<emp>",
        ans: "ans2"
    },
    {
        question: "Q5: What should be the first tag in any HTML document?",
        a: "<head>",
        b: "<title>",
        c: "<html>",
        d: "<document>",
        ans: "ans3"
    },
    {
        question: "Q6: How can you make a bulleted list with numbers?",
        a: "<dl>",
        b: "<ol>",
        c: "<list>",
        d: "<ul>",
        ans: "ans2"
    }

];

var question = document.querySelector('.questions');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var submit = document.querySelector('#submit');
var answers = document.querySelectorAll('.answer');

var questionCount = 0;
var score = 0;

function loadQuestion() {
    var questionList = quiz[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion()


function getCheckAnswer() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id

        }

    }
    return answer;


}
function deselect() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        answers[i].checked = false;

    }

}



submit.addEventListener("click", () => {

    var checkAnswers = getCheckAnswer();
    // console.log(checkAnswers)
    if (checkAnswers === quiz[questionCount].ans) {
        score++
        // console.log(score)
    }
    else {
        // console.log(score)
    }

    questionCount++;
    if (questionCount < quiz.length) {
        loadQuestion();
        deselect();
    }
    else if (score > 15) {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quiz.length}  </h3>
            <p classs="succes">You are Great 🏆</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')
    }
    else {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quiz.length}  </h3>
            <p class="fail">You are fail 😞</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')

    }

})
var teacher = "Sir Ghous Ahmed";
if(teacher==="Ghous Ahmed"){
    alert("you can enjoy quiz")
}