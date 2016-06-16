currentQuestion = 0;
  this.questions = [
        '1. Do ye like yer drinks strong?',
        '2. Do ye like it with a salty tang?',
        '3. Are ye a lubber who likes it bitter?',
        '4. Would ye like a bit of sweetness with yer poison?',
        '5. Are ye one for a fruity finish?',
    ];

function generateQuestions(){
$('#generateQuestions').append(this.questions[0]);
}
//this is a comment ya bitchhhhhhhhh


function nextElement() {
	console.log("fucks");
	$('#generateQuestions').append(this.questions++);
	for (var i = 0; i < questions[currentQuestion];i++){

	}
}
generateQuestions();
  //.append = myArray[myIndex++ % myArray.length];



// function generateQuestion(question_number) {
//     $('#question_title').text(questions[currentQuestion].question);
//     $('#header-image img').attr("src", questions[currentQuestion].photo);
//     for (var i = 0; i < questions[question_number].answers.length; i++) {
//         $('.answers').append('<li class="answer">' + questions[question_number].answers[i] + '</li>');
//     }

//     if (currentQuestion === 0) {
//         for (var i = 0; i < questions.length; i++) {
//             $('.progress ul').
//             append("<li>" + (i + 1) + "</li>");


