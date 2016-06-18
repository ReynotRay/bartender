   // function BartenderApp(questions,ingredients) {
    //establish current question 0
    currentQuestion = 0;
    //questions
     var questions = ['Do ye like yer drinks strong?',
        'Do ye like it with a salty tang?',
        'Are ye a lubber who likes it bitter?',
        'Would ye like a bit of sweetness with yer poison?',
        'Are ye one for a fruity finish?',];
 

    this.ingredients = {
        strong: ['Glug of rum', ' slug of whisky', ' & splash of gin.'],
        salty: ['Olive on a stick', 'salt-dusted rim',' & rasher of bacon.'],
        bitter: ['Shake of bitters', 'splash of tonic',' & twist of lemon peel.'],
        sweet: ['Sugar cube', 'spoonful of honey', ' & splash of cola.'],
        fruity: ['Slice of orange', 'dash of cassis',' & cherry on top.'
        ]
}
function generateQuestions(){
    console.log(questions);
 for (var i = 0; i < questions.length; i++) {
    generateQuestions += questions[i] + '<br>';     
     }
     $('.generateQuestionsList').append("<div>"generateQuestions"</div");
    console.log("fucks");
        
    }











       // var app = new BartenderApp();
    //start app with displayQuetsions
    generateQuestions();