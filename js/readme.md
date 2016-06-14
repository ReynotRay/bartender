function generateQuestion(question_number) {
    $('#question_title').text(questions[currentQuestion].question);
    $('#header-image img').attr("src", questions[currentQuestion].photo);
    for (var i = 0; i < questions[question_number].answers.length; i++) {
        $('.answers').append('<li class="answer">' + questions[question_number].answers[i] + '</li>');
    }

    if (currentQuestion === 0) {
        for (var i = 0; i < questions.length; i++) {
            $('.progress ul').
            append("<li>" + (i + 1) + "</li>");

        }
    }
}





old Js




BartenderApp.prototype.generateDrinks = function() {
    //     for (var i = 0; i < this.questions.length;i++) {
    //     }
    //     $('#generateQuestions').append('<li id="questions">' + this.questions[0] + '<br>' + '</li>');
    //     console.log(this.questions[0]);
    //     console.log(this.questions);

    // };
    if (currentQuestion === 0) {
        for (var i = 0; i < this.questions.length; i++) {
            append("<li>" + (i + 1) + "</li>");
        }
    }
};
