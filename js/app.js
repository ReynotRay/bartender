// $(document).ready(main);
//     $('#submitButton').click(function(event) {
//     event.preventDefault();
//     console.log('click working');
//     console.log($('#input').val());
//     app.verifyData();
//     });

function BartenderApp() {

       this.currentQuestion = 0;
        
        this.questions = [{
        question:'1. Do ye like yer drinks strong?',
        ingredients: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    }, {
        quetsion:'2. Do ye like it with a salty tang?',
        ingredients: ['Olive on a stick', 'salt-dusted rim','rasher of bacon'],
    }, {
        question:'3. Are ye a lubber who likes it bitter?',
        ingredients: ['Shake of bitters', 'splash of tonic','twist of lemon peel'],
    }, {
        question:'4. Would ye like a bit of sweetness with yer poison?',
        ingredients: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    }, {
        question:'5. Are ye one for a fruity finish?',
        ingredients: ['Slice of orange', 'dash of cassis', 'cherry on top']
        }]; 
     } 

function main() {
    console.log('what it dew');
   // app.generateQuestions();

}


BartenderApp.prototype.generateQuestions = function() {
        //$('#generateQuestions').text(questions[currentQuestion].question);
        for (var i = 0; i < this.questions.length; i++) {
            $('#generateQuestions').append('<li id="questions">' + this.questions[0] + '<br>' + '</li>');
        }
        //console.log(this.questions)
        //     if (currentQuestion === 0) {
        // for (var i = 0; i < questions.length; i++) {
           
        //     append("<li>" + (i + 1) + "</li>");

        //             }
    }
        
this.quetsions

BartenderApp.prototype.verifyData = function () {
    if ($('#input').val() == 'yes') {
        app.displayIngredients();
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

BartenderApp.prototype.displayIngredients = function() {
    console.log(this.questions);
$(this.questions).show();
    console.log('what the fucks');
$.each(this.questions, function (key,value){
    $('#generateQuestions').append('<p>' + key + ' : ' + value  + '</li>');
});

}
//run the function generate drinks




var app = new BartenderApp();
    

    $('#submitButton').click(function(event) {
    event.preventDefault();
    console.log('click working');

    console.log($('#input').val());
    app.verifyData();

});

app.generateQuestions();




