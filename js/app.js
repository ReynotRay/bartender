        
       function BartenderApp() { 
        this.questions = ['1. Do ye like yer drinks strong?',
            '2. Do ye like it with a salty tang?',
            '3. Are ye a lubber who likes it bitter?',
            // '4. Would ye like a bit of sweetness with yer poison?',
            //  '5. Are ye one for a fruity finish?',
         ];
         this.ingredients = 
             {
                 strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
                 salty: ['Olive on a stick', 'salt-dusted rim','rasher of bacon'],
                 bitter: ['Shake of bitters', 'splash of tonic','twist of lemon peel'],
                 sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
                 fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
            };
         }
 //create a loop that will append questions.
BartenderApp.prototype.generateDrinks = function() {
        for (var i = 0; i < this.questions.length;i++) {
        }
        $('#generateQuestions').append('<li id="questions">' + this.questions[0] + '<br>' + '</li>');
        console.log(this.questions[0]);
        //console.log(this.questions)
        //     if (currentQuestion === 0) {
        // for (var i = 0; i < questions.length; i++) {
           
        //     append("<li>" + (i + 1) + "</li>");

        //             }
    }
        

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
         console.log(this.ingredients);
         $('.ingredients').show();
         
 $.each(this.ingredients, function (key,value){
     $('.ingredients').append('<p>' + key + ':' + value +'</li>');
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

app.generateDrinks();




