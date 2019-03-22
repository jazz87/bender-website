// quizscript van Jeroen
$(document).ready(() => {
let context = {
  newArray: [
    {questionOne: '1. Wat is het doel van Jobbenders?',
    answerOne: 'Het bouwen van Skynet zodat de wereld overgenomen kan worden',
    correctOne: false,
    answerTwo: 'Het bouwen van robots die drinken en roken',
    correctTwo: false,
    answerThree: 'Zorgen dat alle banen geautomatiseerd worden',
    correctThree: false,
    answerFour: 'Bewustmaking van de aankomende verandering in de arbeidsmarkt zodat mensen zich tijdig laten omscholen',
    correctFour: true,
    questionNumber: 'One',
    questionNotAnswered: true,
  },
  {questionOne: '2. Welke beroepstak zal mogelijk niet lijden onder de vierde industriele revolutie (VIR)',
  answerOne: 'Accountants',
  correctOne: false,
  answerTwo: 'Klantenservicemedewerkers',
  correctTwo: false,
  answerThree: 'Data-Analisten',
  correctThree: true,
  answerFour: 'Administratief Medewerker',
  correctFour: false,
  questionNumber: 'Two',
  questionNotAnswered: true,
},
{questionOne: 'Wat is mogelijk geen effect van de de VIR?',
  answerOne: 'Transformatie van de banenmarkt',
  correctOne: false,
  answerTwo: 'Robotisering van arbeid',
  correctTwo: false,
  answerThree: 'Netto winst van banen',
  correctThree: false,
  answerFour: 'Netto verlies van banen',
  correctFour: true,
  questionNumber: 'Three',
  questionNotAnswered: true,
},
{questionOne: '4. Het WEF schat dat een groot percentage werkenden tegen 2022 bijscholing/omscholing nodig heeft. Hoe groot is dit percentage',
  answerOne: 'Ongeveer 28%',
  correctOne: false,
  answerTwo: 'Ongeveer 54%',
  correctTwo: true,
  answerThree: 'Ongeveer 72%',
  correctThree: false,
  answerFour: 'Ongeveer 89%',
  correctFour: false,
  questionNumber: 'Four',
  questionNotAnswered: true,
},
  ]
};
const templateElement = document.getElementById("main");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
const getInformation = document.getElementById("container");
getInformation.innerHTML = compiledHtml;

// scribbles
const answeredFunction = function(i){context.newArray[i].questionNotAnswered = false};

// for loop answer one
for (let i = 0; i < context.newArray.length; i++) {
  if (context.newArray[i].correctOne === false && context.newArray[i].questionNotAnswered === true){
  $('#blok'+context.newArray[i].questionNumber+'answerone').on('click', () => {$('#blok'+context.newArray[i].questionNumber+'answerone').css('backgroundColor', '#F27F7F');
});
}
else if (context.newArray[i].correctOne === true && context.newArray[i].questionNotAnswered === true) {$('#blok'+context.newArray[i].questionNumber+'answerone').on('click', () => {
$('#blok'+context.newArray[i].questionNumber+'answerone').css('backgroundColor', '#C3FF00');
});}
}
// end of for loop
// for loop answer 2
for (let i = 0; i < context.newArray.length; i++) {
  if (context.newArray[i].correctTwo === false && context.newArray[i].questionNotAnswered === true){
  $('#blok'+context.newArray[i].questionNumber+'answertwo').on('click', () => {
  $('#blok'+context.newArray[i].questionNumber+'answertwo').css('backgroundColor', '#F27F7F');
});
}
else if (context.newArray[i].correctTwo === true && context.newArray[i].questionNotAnswered === true) {$('#blok'+context.newArray[i].questionNumber+'answertwo').on('click', () => {
$('#blok'+context.newArray[i].questionNumber+'answertwo').css('backgroundColor', '#C3FF00');
});}
}
// end of for loop
// for loop answer 3
for (let i = 0; i < context.newArray.length; i++) {
  if (context.newArray[i].correctThree === false && context.newArray[i].questionNotAnswered === true){
  $('#blok'+context.newArray[i].questionNumber+'answerthree').on('click', () => {
  $('#blok'+context.newArray[i].questionNumber+'answerthree').css('backgroundColor', '#F27F7F');
});
}
else if (context.newArray[i].correctThree === true && context.newArray[i].questionNotAnswered === true) {$('#blok'+context.newArray[i].questionNumber+'answerthree').on('click', () => {
$('#blok'+context.newArray[i].questionNumber+'answerthree').css('backgroundColor', '#C3FF00');
});}
}
// end of for loop
// for loop answer 4
for (let i = 0; i < context.newArray.length; i++) {
  if (context.newArray[i].correctFour === false && context.newArray[i].questionNotAnswered === true){
  $('#blok'+context.newArray[i].questionNumber+'answerfour').on('click', () => {
  $('#blok'+context.newArray[i].questionNumber+'answerfour').css('backgroundColor', '#F27F7F');
});
}
else if (context.newArray[i].correctFour === true && context.newArray[i].questionNotAnswered === true) {$('#blok'+context.newArray[i].questionNumber+'answerfour').on('click', () => {
$('#blok'+context.newArray[i].questionNumber+'answerfour').css('backgroundColor', '#C3FF00');
});}
}
// end of for loop


// closing tags following for the ready function
});
