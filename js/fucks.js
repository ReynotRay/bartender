

var strong = new questions(['Do ye like yer drinks strong?']);
var salty = new questions(['Do ye like it with a salty tang?']);
var bitter = new questions(['Are ye a lubber who likes it bitter?']);
var sweet = new questions(['Would ye like a bit of sweetness with yer poison?']);
var fruity = new questions(['Are ye one for a fruity finish?']);

var strong = new ingredients(['glug of rum', ' slug of whisky', ' splash of gin']);
var salty = new ingredients([' olive on a stick', ' salt-dusted rim',' rasher of bacon']);
var bitter = new ingredients([' shake of bitters', ' splash of tonic',' twist of lemon peel']);
var sweet = new ingredients([' sugar cube', ' spoonful of honey', ' splash of cola']);
var fruity = new ingredients([' slice of orange', ' dash of cassis',' cherry on top']);


var preferences = {};

if(strong){
	preferences.strong = true;
}
if(sweet){
	preferences.sweet = true;
}

preference = {
	strong:true,
	sweet:true
};

Bartender.prototype.createDrink = function (preferences){
	var drink = ['the fucks drink'];
	if (preferences.strong){
		drink.push(preferences.strong[randomnumber]);
	}
};