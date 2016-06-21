//establish function for bartender
function BartenderApp(){ 

     var questions = ['Do ye like yer drinks strong?',
        'Do ye like it with a salty tang?',
        'Are ye a lubber who likes it bitter?',
        'Would ye like a bit of sweetness with yer poison?',
        'Are ye one for a fruity finish?',];
 
     var ingredients = {
        strong: ['glug of rum', ' slug of whisky', ' splash of gin'],
        salty: [' olive on a stick', ' salt-dusted rim',' rasher of bacon'],
        bitter: [' shake of bitters', ' splash of tonic',' twist of lemon peel'],
        sweet: [' sugar cube', ' spoonful of honey', ' splash of cola'],
        fruity: [' slice of orange', ' dash of cassis',' cherry on top']
};

//create a random function that will pick through ingredients
var randomElement = function() {
   var newNumber = Math.floor((Math.random() * 3) + 0);
   return newNumber;
};
//display questions
BartenderApp.prototype.displayQuestions = function() {
 for (var i = 0; i < questions.length; i++) { 
     $('.generateQuestionsList').append('<div>'+'<p>' + questions[i] +'<br> Yes! <input name=check' + i +
    ' value="true" type=radio <br> No! <input name=check' + i + ' type=radio value="false"></p>'+'</div>');
    }

//click function 
    $('#submitAnswers').click(function(event){
    event.preventDefault();
    $('.generateQuestionsList').hide();
    $('#submitAnswers').hide();
    $('#reset').show();
    $('#consist').show();
    $('#reset').click(function() {
        location.reload();
        });
    //retrieve the selection
    var userChoice = $('form').serializeArray();
        if (userChoice[0].value === "true" ) {
    console.log("inside0");
    $('.ingredients').append(ingredients.strong[randomElement()]);
        }
        if (userChoice[1].value === "true") {
    console.log("inside1");
    $('.ingredients').append(ingredients.salty[randomElement()]);
        }
        if (userChoice[2].value === "true") {
    console.log("inside2");
    $('.ingredients').append(ingredients.bitter[randomElement()]);
        }
        if (userChoice[3].value === "true") {
    console.log("inside3");
    $('.ingredients').append(ingredients.sweet[randomElement()]);    
        }
        if (userChoice[4].value === "true") {
    console.log("inside4");
    $('.ingredients').append( ingredients.fruity[randomElement()]);
        }
        else{
            console.log('error');
        }
    console.log(userChoice);
    
    });

};
}
    var app = new BartenderApp();
    //start app with displayQuetsions
    app.displayQuestions();