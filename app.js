   // function BartenderApp(questions,ingredients) {
    //establish current question 0
    currentQuestion = 0;
    //questions
     var questions = ['Do ye like yer drinks strong?',
        'Do ye like it with a salty tang?',
        'Are ye a lubber who likes it bitter?',
        'Would ye like a bit of sweetness with yer poison?',
        'Are ye one for a fruity finish?',];
 

    var ingredients = {
        strong: ['Glug of rum', ' slug of whisky', ' & splash of gin.'],
        salty: ['Olive on a stick', 'salt-dusted rim',' & rasher of bacon.'],
        bitter: ['Shake of bitters', 'splash of tonic',' & twist of lemon peel.'],
        sweet: ['Sugar cube', 'spoonful of honey', ' & splash of cola.'],
        fruity: ['Slice of orange', 'dash of cassis',' & cherry on top.'
        ]
};

// var drink = function(ingredients) {
//     console.log(ingredients);
//     this.strong = ingredients.strong;
//     this.salty = ingredients.salty;
//     this.bitter = ingredients.bitter;
// };

//working random number
//     var ingredients = 
//       ['Glug of rum','slug of whisky', 'splash of gin']
 
//     ;

// var randomElementFromArray = Math.floor(Math.random() * ingredients.length);

// console.log(ingredients[randomElementFromArray]);


// var randomElementFromArray = function(){
//     var newNumber = Math.floor(Math.random() + ingredients.length);
//     console.log(ingredients[randomElementFromArray]);
// };


function generateQuestions(){
    
 for (var i = 0; i < questions.length; i++) { 
     $('.generateQuestionsList').append('<div>'+'<p>' + questions[i] +'<br> yes <input name=check' + i +
    ' value="true" type=radio <br> No! <input name=check' + i + ' type=radio value="false"></p>'+'</div>');
    }
    
//function submit(){
    $('#submitAnswers').click(function(event){
    event.preventDefault();
    //retrieve the selection
    var userChoice = $('form').serializeArray();
       if (userChoice[0].value === "true") {
    console.log("inside0");
        }
    //     else if (userChoice[1].value === "true") {
    // console.log("inside1");
    //     }
    //     else if (userChoice[2].value === "true") {
    // console.log("inside2");
    //     }
    //     else if (userChoice[3].value === "true") {
    // console.log("inside3");
    //     }
    //     else if (userChoice[4].value === "true") {
    // console.log("inside4");
    //     }
    //     else{
    //         console.log('nothing');
    //     }
        
    console.log(userChoice);
    //checkTrue();
    
    });


}

    // var app = new BartenderApp();
    //start app with displayQuetsions
    generateQuestions();
   //random element from array randomElementFromArray();