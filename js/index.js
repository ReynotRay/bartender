//establish bartender fucntion for questions and ingredients
function BartenderApp(questions,ingredients) {
    //establish current question 0
    currentQuestion = 0;
    questions = ['Do ye like yer drinks strong?',
        'Do ye like it with a salty tang?',
        'Are ye a lubber who likes it bitter?',
        'Would ye like a bit of sweetness with yer poison?',
        'Are ye one for a fruity finish?',
    ];
    this.ingredients = {
        strong: ['Glug of rum', ' slug of whisky', ' & splash of gin.'],
        salty: ['Olive on a stick', 'salt-dusted rim',' & rasher of bacon.'],
        bitter: ['Shake of bitters', 'splash of tonic',' & twist of lemon peel.'],
        sweet: ['Sugar cube', 'spoonful of honey', ' & splash of cola.'],
        fruity: ['Slice of orange', 'dash of cassis',' & cherry on top.'
        ]
    };
   
BartenderApp.prototype.loopQuestions = function() {
     //display initial questions
    $(".generateQuestions").text(questions[currentQuestion]);
    // the next line, of course, assumes you have an element with id="next"
    $('#next').click(function() {
        currentQuestion = (currentQuestion + 1) % questions.length; // increment your counter
        // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array
        $(".generateQuestions").text(questions[currentQuestion]); // the new incremented value
        app.reset();
    });
};}
BartenderApp.prototype.displayIngredients = function() {

    var inputValue = $('#input').val();
    var textValue = $(".generateQuestions").text();
    var hideSubmitButton = $('#submitButton').hide();
    var showDrinkConsist = $('#consist').show();

    if (inputValue == 'yes' && textValue == 'Do ye like yer drinks strong?') {
    var hideSubmitButton;
    var showDrinkConsist;
        $('.ingredients').text(this.ingredients["strong"]);
    } else if (inputValue == 'yes' && textValue =='Do ye like it with a salty tang?') {
        var hideSubmitButton;
        var showDrinkConsist;
        $('.ingredients').show(this.ingredients["salty"]);
    } else if (inputValue == 'yes' && textValue =='Are ye a lubber who likes it bitter?') {
        var hideSubmitButton;  
        var showDrinkConsist;
        $('.ingredients').show(this.ingredients["bitter"]);
    } else if (inputValue == 'yes' && textValue =='Would ye like a bit of sweetness with yer poison?') {
        var hideSubmitButton;
        var showDrinkConsist;
        $('.ingredients').show(this.ingredients["sweet"]);
    } else if (inputValue == 'yes' && textValue =='Are ye one for a fruity finish?') {
        var hideSubmitButton;
        var showDrinkConsist;
        $('.ingredients').show(this.ingredients["fruity"]);
    } else {
        $('#pirate').show();
        $('#noalcohol').show();
        $('#next').hide();
        var hideSubmitButton;
        $('#consist').hide();
        $('#input').hide();
         $('#reset').show();
        $('#reset').click(function() {
    location.reload();
});

    }
};

$('#submitButton').click(function(event) {
    event.preventDefault();
    app.displayIngredients();
});

BartenderApp.prototype.reset = function() {
    $('#submitButton').show();
    $('#consist').hide();
    $('.ingredients').hide();
    $('#pirate').hide();
};

var app = new BartenderApp();

app.loopQuestions();