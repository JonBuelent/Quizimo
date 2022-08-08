let questions = [{
    "question": "Über welche Länge erstreckt sich das Uralgebierge?",
    "answer_1": "2.400 Kilometer",
    "answer_2": "2.800 Kilometer",
    "answer_3": "3.000 Kilometer",
    "answer_4": "4.200 Kilometer",
    "right_answer": 1
},
{
    "question": "Welche dieser Städte liegt am nördlichsten?",
    "answer_1": "Paris",
    "answer_2": "London",
    "answer_3": "Brüssel",
    "answer_4": "Amsterdam",
    "right_answer": 4
},
{
    "question": "Welche ist die größte Wüste der Welt?",
    "answer_1": "Grönland",
    "answer_2": "Gobi",
    "answer_3": "Antarktis",
    "answer_4": "Sahara",
    "right_answer": 3
},
{
    "question": "Aus welchem lateinamerkianischen Land stammte der Revolutionär Che Guevara?",
    "answer_1": "Mexiko",
    "answer_2": "Bolovien",
    "answer_3": "Kuba",
    "answer_4": "Argentinien",
    "right_answer": 2
},
{
    "question": "Wie Lange war Gerhard Schröder Bundeskanzler der Bundesrepublik Deutschland?",
    "answer_1": "6 Jahre",
    "answer_2": "5 Jahre",
    "answer_3": "8 Jahre",
    "answer_4": "7 Jahre",
    "right_answer": 2
},
{
    "question": "In Welchem Jahr fiel die Berliner Mauer?",
    "answer_1": "1991",
    "answer_2": "1990",
    "answer_3": "1989",
    "answer_4": "1988",
    "right_answer": 3
},
{
    "question": "Was wird mit der Einheit Ampère angegeben?",
    "answer_1": "Stromstärke",
    "answer_2": "spannung",
    "answer_3": "Widerstand",
    "answer_4": "Energie",
    "right_answer": 1
},{
    "question": "Welche der Instrumente dient zum Messen des Luftdrucks?",
    "answer_1": "das Thermometer",
    "answer_2": "das Spektroskop",
    "answer_3": "das Barometer",
    "answer_4": "das Hygrometer",
    "right_answer": 3
},
{
    "question": "Wie Lange dauert eine mit Lichtgeschwindigkeit unternommene Reise zur Sonne?",
    "answer_1": "26 Minuten",
    "answer_2": "12 Minuten",
    "answer_3": "4 Minuten",
    "answer_4": "8 Minuten",
    "right_answer": 4
}
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    // document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('progress-bar-display').style = 'display: none;';
    document.getElementById('question-body').style = 'display: none;';
}

function startGame() {
    document.getElementById('start-screen').style = 'display: none;';
    document.getElementById('quiz-card-display').style = '';
    document.getElementById('question-body').style = 'display: show;';

    document.getElementById('slide-btn').style = '';
    document.getElementById('progress-bar').innerHTML = `0 %`;
    document.getElementById('progress-bar').style = `width: 0%;`;

    showQuestions();
}

function showQuestions() {
    document.getElementById('progress-bar-display').style = '';
    if (gameIsOver()) {
        showEndScreen();
    } else {

        updateToNextQuestion();
    }
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
// Answer right and wrong //
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        theAnswerIsRight(selection);
    } else {
        theAnswerIswrong(selection, idOfRightAnswer);
    }
    document.getElementById('next-button').style = '';
    updateProgressbar();
}
function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer']
}

function theAnswerIsRight(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success-color');
    document.getElementById(selection).previousElementSibling.classList.add('bg-success-color-icon');
    AUDIO_SUCCESS.play();
    rightQuestions++;
}

function theAnswerIswrong(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger-color');
    document.getElementById(selection).previousElementSibling.classList.add('bg-danger-color-icon');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-color');
    document.getElementById(idOfRightAnswer).previousElementSibling.classList.add('bg-success-color-icon');
    AUDIO_FAIL.play();
}
// Answer section end //

// Next Question //
function nextQuestion() {
    currentQuestion++; // zb von 0 auf 1

    document.getElementById('next-button').style = 'display: none;';

    resetAnswerButtons();
    showQuestions();
}

function lastQuestion() {
    if (currentQuestion == 0) {
        document.getElementById('quiz-card-display').style = 'display: none;';
        document.getElementById('start-screen').style = '';
        document.getElementById('slide-btn').style = 'display: none;';
        init();
    } else {
        currentQuestion--;
        showQuestions();
    }
}
// Next Question End //