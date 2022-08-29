let questions = [
    {
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
    "answer_2": "Spannung",
    "answer_3": "Widerstand",
    "answer_4": "Energie",
    "right_answer": 1
    },
    {
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
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {
    //document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('progress-bar-display').classList.add('d-none');
    document.getElementById('questionBody').classList.add('d-none');
    document.getElementById('slideButton').classList.add('d-none');
    document.getElementById('restart').classList.add('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('trophyImg').classList.add('d-none');
    showQuestion();
}
function startGame() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('questionBody').classList.remove('d-none');
    document.getElementById('progress-bar-display').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('trophyImg').classList.add('d-none');
    document.getElementById('slideButton').style = '';
    document.getElementById('slideButton').classList.remove('d-none');
    document.getElementById('progress-bar').innerHTML = `0 %`;
    document.getElementById('progress-bar').style = `width: 0%;`;
    rubrik();
}
function showQuestion() {
    if(currentQuestion >= questions.length) {
        document.getElementById ('endScreen').style = '';
        document.getElementById ('questionBody').style = 'display: none;';
        document.getElementById ('slideButton').style = 'display: none;';
        document.getElementById('progress-bar-display').classList.add('d-none');
        document.getElementById('endScreen').classList.remove('d-none');
        restartSet ();
        }else {
            let question = questions[currentQuestion];
            document.getElementById('question-text').innerHTML = question['question'];
            document.getElementById('answer_1').innerHTML = question['answer_1'];
            document.getElementById('answer_2').innerHTML = question['answer_2'];
            document.getElementById('answer_3').innerHTML = question['answer_3'];
            document.getElementById('answer_4').innerHTML = question['answer_4'];
            }
        // X fragen von x richtig
        document.getElementById ('amountOfQuestions').innerHTML = questions.length;
        document.getElementById ('amountOfRightQuestions').innerHTML = rightQuestions;
}
function restartSet () {
    setTimeout(function() {
        document.getElementById('restart').classList.remove('d-none'); 
        },2000);
}
function answer(selection){
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('Selected answer is', selectedQuestionNumber);
    console.log('Selected answer is', question['right_answer']);
    let idOfRightAnswer =`answer_${question['right_answer']}`;
    rubrik();

    if(selectedQuestionNumber == question['right_answer']){
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('progress-bar').innerHTML = `11 %`;
        document.getElementById('progress-bar').style = `width: 11%;`;
        rightQuestions++;
        AUDIO_SUCCESS.play();
        disableAnswers();
    } else {
        console.log('Falsche Anwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
        disableAnswers();
    }
        document.getElementById('next-button').disabled = false;
        updateProgressbar();
}
// nach der ersten Fragerunde
function nextQuestion(){
        document.getElementById('next-button').disabled = true;
        currentQuestion++; // von null auf eins und dann auf zwi und dann auf drei usw. erhöht
        resetAnwerButtons();
        showQuestion();
        rubrik();
        enableAnswers();

}
//function lastQuestion(){
//    currentQuestion--; // nach hinten 
//    document.getElementById('next-button').disabled = true;
//    resetAnwerButtons();
//    showQuestion();
//    rubrik();
//}
function resetAnwerButtons() {
        document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_1').parentNode.classList.remove('bg-success');
        document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_2').parentNode.classList.remove('bg-success');
        document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_3').parentNode.classList.remove('bg-success');
        document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
function updateProgressbar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}
function rubrik() {
    if(currentQuestion <= 2){
        document.getElementById('physik').classList.remove('text-decoration');
        document.getElementById('politic').classList.remove('text-decoration');
        document.getElementById('erth').classList.add('text-decoration');
    }else if(currentQuestion <= 5){
        document.getElementById('physik').classList.remove('text-decoration');
        document.getElementById('erth').classList.remove('text-decoration');
        document.getElementById('politic').classList.add('text-decoration');
    }else if (currentQuestion <= 8) {
        document.getElementById('politic').classList.remove('text-decoration');
        document.getElementById('erth').classList.remove('text-decoration');
        document.getElementById('physik').classList.add('text-decoration');
    }
}
function restartGame() {
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('start-screen').classList.remove('d-none');
    document.getElementById('questionBody').classList.remove('d-none');
    document.getElementById('progress-bar-display').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none'); //Endscreen ausblenden
    document.getElementById('slideButton').style = '';
    document.getElementById('slideButton').classList.remove('d-none');
    document.getElementById('progress-bar').innerHTML = `0 %`;
    document.getElementById('progress-bar').style = `width: 0%;`;
    document.getElementById('questionBody').style = ''; // questionbody wieder anzeigen
    init();
    startGame();
}

function disableAnswers() {
    document.getElementById('cardcontainer1').style = 'pointer-events: none;';
    document.getElementById('cardcontainer2').style = 'pointer-events: none;';
    document.getElementById('cardcontainer3').style = 'pointer-events: none;';
    document.getElementById('cardcontainer4').style = 'pointer-events: none;';
}
function enableAnswers() {
    document.getElementById('cardcontainer1').style = '';
    document.getElementById('cardcontainer2').style = '';
    document.getElementById('cardcontainer3').style = '';
    document.getElementById('cardcontainer4').style = '';
}