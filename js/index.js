//establish bartender fucntion for questions and ingredients
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
    //function that will display questions
    BartenderApp.prototype.displayQuestions = function() {
     //display initial questions
    $(".generateQuestions").text(questions[currentQuestion]);
    // you will be click a div with id next
    $('#next').click(function() {
        //you will increment on click by 1
        currentQuestion = (currentQuestion + 1) % questions.length; 
        // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array
        $(".generateQuestions").text(questions[currentQuestion]); // the new incremented value
       //app reset will .show() correct buttons before display quesitons
       $('#noalcohol').hide();
       app.reset();
        });
    };}
    //function that will display ingredients when called
    BartenderApp.prototype.displayIngredients = function() {
    //establish local variables
    var inputValue = $('#input').val();
    var textValue = $(".generateQuestions").text();
    var hideSubmitButton = $('#submitButton').hide();
    var showDrinkConsist = $('#consist').show();
    //if input value equals yes and text value equals quetsion than do this
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
        //location.reload();
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
    //when you click submit button display ingredients 
    $('#submitButton').click(function(event) {
    event.preventDefault();
    app.displayIngredients();
    });
    //function reset will show or hide buttons.
    BartenderApp.prototype.reset = function() {
    $('#submitButton').show();
    $('#consist').hide();
    $('.ingredients').hide();
    $('#pirate').hide();
    };

