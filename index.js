
  this.questions = [
        '1. Do ye like yer drinks strong?',
        '2. Do ye like it with a salty tang?',
        '3. Are ye a lubber who likes it bitter?',
        '4. Would ye like a bit of sweetness with yer poison?',
        '5. Are ye one for a fruity finish?',
    ];

var myIndex = 1;
var print = document.getElementById('print');

print.innerHTML = myArray[0];

function nextElement() {
   print.innerHTML = myArray[myIndex];
   myIndex = (myIndex+1)%(this.questions.length);
}