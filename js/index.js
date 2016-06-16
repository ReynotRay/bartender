function BartenderApp() {

	currentQuestion = 0;
    questions = [
        'Do ye like yer drinks strong?',
        'Do ye like it with a salty tang?',
        'Are ye a lubber who likes it bitter?',
        'Would ye like a bit of sweetness with yer poison?',
        'Are ye one for a fruity finish?',
    ];
    this.ingredients = {
        strong: ['Glug of rum,', ' slug of whisky,', ' & splash of gin.'],
        salty: ['Olive on a stick','salt-dusted rim', ' & rasher of bacon.'],
        bitter: ['Shake of bitters','splash of tonic', ' & twist of lemon peel.'],
        sweet: ['Sugar cube','spoonful of honey', ' & splash of cola.'],
        fruity: ['Slice of orange','dash of cassis', ' & cherry on top.']
    };

    $(".generateQuestions").text(questions[currentQuestion]); // your initial value
	
  	// the next line, of course, assumes you have an element with id="next"
    $('#next').click(function () {
        currentQuestion = (currentQuestion + 1) % questions.length; // increment your counter
        // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array
        $(".generateQuestions").text(questions[currentQuestion]); // the new incremented value
    });

} 
function dislayIngredients () {
    console.log( 'value from generateQuestions', ($(".generateQuestions").text()));
    console.log('value from input',($("#input").val()));
    var inputValue = $('#input').val();
    var textValue = $(".generateQuestions").text();

    if (inputValue == 'yes' && textValue =='Do ye like yer drinks strong?') {
       console.log('first question correct');
        	$('.ingredients').show();
          	$('.ingredients').append(this.ingredients["strong"]);
   }
   else if (inputValue == 'yes' && textValue =='Do ye like it with a salty tang?'){

   	$('.ingredients').append(this.ingredients["salty"]);
   }
}


$('#submitButton').click(function(event) {
    event.preventDefault();
    dislayIngredients();

});
BartenderApp();




//     console.log($('#generateQuestions').val());
//     if (currentQuestion[0]){
//     	console.log("the fucks");
//    }
//  	if ($('#input').val() == 'yes' && (document.getElementById("#generateQuestions").value ==  "Do ye like yer drinks strong?"))
// 		return	alert("you fucken got it");
// 	else
// 		return alert("Nope");	

// if ($('#generateQuestions').text() == 'Do ye like yer drinks strong?'){





	
    //      console.log('after');
    //      } 
    // else if ($('#input').val() == 'yes' && this.questions[1]) {
    //     console.log('second final question');
       //   $('.ingredients').show();
       // $('.ingredients').append(this.ingredients["salty"]);
        // $('#submitButton').hide();
        // $('.maybe').hide();
        // $('#next').show(); 
    // } else if ($('#input').val() == 'yes' && this.questions[2]) {
    //     console.log('3 final question');

    // }
    // else if ($('#input').val() == 'yes'|| this.questions[3]) {
    //     console.log('4 final question');

    // }
    // else if ($('#input').val() == 'yes'|| this.questions[4]) {
    //     console.log('5 final question');
    //}

    // else{   
    //     console.log('finised');
    //     $('#pirate').show();
    // }
// }
