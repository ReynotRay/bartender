//$(document).ready(function() {


function BartenderApp() {

    this.questions = [
        '1. Do ye like yer drinks strong?',
        // '2. Do ye like it with a salty tang?',
        // '3. Are ye a lubber who likes it bitter?',
        // '4. Would ye like a bit of sweetness with yer poison?',
        // '5. Are ye one for a fruity finish?',
    ];

    this.ingredients = {
        strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
        salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
        bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
        sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
        fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
    }
}
BartenderApp.prototype.generateDrinks = function() {
    for (var i = 0; i < this.questions.length; i++) {
        $('#generateQuestions').append('<li id="questions">' + this.questions[i] + '<br>' + '</li>');
    }
    console.log(this.ingredients);
}



var app = new BartenderApp();


$('#submitButton').click(function(event) {
    event.preventDefault();
    console.log('click working');

    function getValue() {
        $('#input').val();
    }
    console.log($('#input').val());
    verifyData();
});

function verifyData(){
if ($('#input').val() == 'yes'){
    console.log(this.ingredients);
}
}


app.generateDrinks();




