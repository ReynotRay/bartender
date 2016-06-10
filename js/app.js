//init BartenderApp constructor
function BartenderApp() {
        this.questions = ['1. Do ye like yer drinks strong?',
            // '2. Do ye like it with a salty tang?',
            // '3. Are ye a lubber who likes it bitter?',
            // '4. Would ye like a bit of sweetness with yer poison?',
            // '5. Are ye one for a fruity finish?',
        ];
        this.ingredients = [' glum of rum', ' slug of whisky', ' splash of gin']
            // {
            //     strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
            //     salty: ['Olive on a stick', 'salt-dusted rim','rasher of bacon'],
            //     bitter: ['Shake of bitters', 'splash of tonic','twist of lemon peel'],
            //     sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
            //     fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
            // }
        }
//create a loop that will append questions.
    BartenderApp.prototype.generateDrinks = function() {
        for (var i = 0; i < this.questions.length; i++) {
            $('#generateQuestions').append('<li id="questions">' + this.questions[
                i] + '<br>' + '</li>');
        }
    }
//create new objects of the same type
    var app = new BartenderApp();
//click function will run code accordingly 
    $('#submitButton').click(function(event) {
    event.preventDefault();
    console.log('click working');
    //getValue function will retrieve value from id inpur
    function getValue() {
        $('#input').val();
    }
    console.log($('#input').val());
    verifyData();
});
//verifyData function will confirm if string is Yes then 
    function verifyData() {
    if ($('#input').val() == 'yes') {
        displayIngredients();
        $('#submitButton').hide();
        $('.maybe').hide();
        $('#next').show();
    } else if ($('#input').val() == 'no') {
        $('#pirate').show();
        $('p').show();
        $('#submitButton').hide();
        $('#next').show();
    }
}

    function displayIngredients() {
        $('.ingredients').show();
        $('.ingredients').append(this.ingredients);
    }
//run the function generate drinks
    app.generateDrinks();