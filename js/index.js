function BartenderApp(){ 
//questions constructor
var questions = function(question) {
    this.question = question;
};

var strong = new questions(['Do ye like yer drinks strong?']);
var salty = new questions(['Do ye like it with a salty tang?']);
var bitter = new questions(['Are ye a lubber who likes it bitter?']);
var sweet = new questions(['Would ye like a bit of sweetness with yer poison?']);
var fruity = new questions(['Are ye one for a fruity finish?']);

console.log(strong.question);

}

//ingreidnets constructor
var ingredients = function(ingredient) {
    this.ingredient = ingredient;
};
var strong = new ingredients(['glug of rum', ' slug of whisky', ' splash of gin']);
var salty = new ingredients([' olive on a stick', ' salt-dusted rim',' rasher of bacon']);
var bitter = new ingredients([' shake of bitters', ' splash of tonic',' twist of lemon peel']);
var sweet = new ingredients([' sugar cube', ' spoonful of honey', ' splash of cola']);
var fruity = new ingredients([' slice of orange', ' dash of cassis',' cherry on top']);

console.log(strong.ingredient);

//create constructor for pantry 

///create drink method