$(function () {

    currentQuestion = 0;
    questions = [
        '1. Do ye like yer drinks strong?',
        '2. Do ye like it with a salty tang?',
        '3. Are ye a lubber who likes it bitter?',
        '4. Would ye like a bit of sweetness with yer poison?',
        '5. Are ye one for a fruity finish?',
        ];

    $("#generateQuestions").text(questions[currentQuestion]); // your initial value

    // the next line, of course, assumes you have an element with id="next"
    $('#next').click(function () {
        currentQuestion = (currentQuestion + 1) % questions.length; // increment your counter
        // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array

        $("#generateQuestions").text(questions[currentQuestion]); // the new incremented value
    });
});