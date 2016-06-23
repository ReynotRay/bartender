function BartenderApp(){ 

     this.questions = ['Do ye like yer drinks strong?',
        'Do ye like it with a salty tang?',
        'Are ye a lubber who likes it bitter?',
        'Would ye like a bit of sweetness with yer poison?',
        'Are ye one for a fruity finish?',];
 
     this.ingredients = {
        strong: ['glug of rum', ' slug of whisky', ' splash of gin'],
        salty: [' olive on a stick', ' salt-dusted rim',' rasher of bacon'],
        bitter: [' shake of bitters', ' splash of tonic',' twist of lemon peel'],
        sweet: [' sugar cube', ' spoonful of honey', ' splash of cola'],
        fruity: [' slice of orange', ' dash of cassis',' cherry on top']
};
}

var randomElement = function() {
   var newNumber = Math.floor((Math.random() * 3) + 0);
   return newNumber;
};

BartenderApp.prototype.createDrink = function(){
    var categories = ['strong','salty','bitter','sweet','fruity'];
    var userChoice = $('form').serializeArray();

    for (var i = 0; i <= 4; i++){
        if (userChoice[i].value === "true" ){
            $('.ingredients').append(this.ingredients[categories[i]][randomElement()]);
    }
        else{
            console.log('error');
        }
    }
    console.log(userChoice);

};


BartenderApp.prototype.displayQuestions = function() {
 console.log('fucksbefore');
 for (var i = 0; i < this.questions.length; i++) { 
     $('.generateQuestionsList').append('<div>'+'<p>' + this.questions[i] +'<br> Yes! <input name=check' + i +
    ' value="true" type=radio <br> No! <input name=check' + i + ' type=radio value="false"></p>'+'</div>');
    }
    console.log('fucksafter');
};

BartenderApp.prototype.clickFunciton = function() {
    $('#submitAnswers').click(function(event){
    event.preventDefault();
       console.log('click');
    $('.generateQuestionsList').hide();
    $('#submitAnswers').hide();
    $('#reset').show();
    $('#consist').show();
    // $('#reset').click(function() {
    //      location.reload();
    //     });
    //retrieve the selection

});

};
   var app = new BartenderApp();
   
    app.displayQuestions();