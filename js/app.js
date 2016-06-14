function BartenderApp() {

    this.questions = [
        '1. Do ye like yer drinks strong?',
        '2. Do ye like it with a salty tang?',
        '3. Are ye a lubber who likes it bitter?',
        '4. Would ye like a bit of sweetness with yer poison?',
        '5. Are ye one for a fruity finish?',
    ];
    this.ingredients = {
        strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
        salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
        bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
        sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
        fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
    };
}
BartenderApp.prototype.displayFirstQuestion = function() {
    $('#generateQuestions').append('<li>'+this.questions[0]+'</li>');

};


// BartenderApp.protype.nextQuestion = fuction(){
$( "#next" ).click(function() {
  app.displaySecondQuestion();
});

BartenderApp.prototype.displaySecondQuestion = function (){
     console.log("before");
    $('#generateQuestions').append('done');
    console.log("after");
    $('#generateQuestions').append('<li>'+this.questions[1]+'</li>');
   
};

BartenderApp.prototype.verifyData = function() {
    if ($('#input').val() == 'yes' || this.questions == [0]) {
        console.log('maybe got it');
        app.displayIngredients();
        $('#submitButton').hide();
        $('.maybe').hide();
        $('#next').show();
    } else if ($('#input').val() == 'yes'|| this.questions == [1]) {
        app.displayIngredients();
        $('#submitButton').hide();
        $('.maybe').hide();
        $('#next').show();
    } else if ($('#input').val() == 'yes'|| this.questions == [2]) {
        app.displayIngredients();
        $('#submitButton').hide();
        $('.maybe').hide();
        $('#next').show();
    }
    else if ($('#input').val() == 'yes'|| this.questions == [3]) {
        app.displayIngredients();
        $('#submitButton').hide();
        $('.maybe').hide();
        $('#next').show();
    }
    else if ($('#input').val() == 'yes'|| this.questions == [4]) {
        app.displayIngredients();
        $('#submitButton').hide();
        $('.maybe').hide();
        $('#next').show();
    }
    else{
        consoel.log('error');
    }
};

BartenderApp.prototype.displayIngredients = function() {
    console.log(this.ingredients);
    $('.ingredients').show();

    $.each(this.ingredients, function(key, value) {
        $('.ingredients').append('<p>' + key + ':' + value + '</li>');
    });

};
//run the function generate drinks




var app = new BartenderApp();


$('#submitButton').click(function(event) {
    event.preventDefault();
    console.log('click working');

    console.log($('#input').val());
    app.verifyData();

});
app.displayFirstQuestion();

