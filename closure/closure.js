//1.

function nonsense(string){
    var blab = function(){
        alert(string);
    };
    blab();
}
nonsense("Hello");

//2.
function nonsense(string){
    var blab = function(){
        alert(string);
    };
    blab();
}

setTimeout(nonsense, 2000,"Hello")

//3.
function nonsense(string) {
	var blab = function () {
		return alert(string);
	}
	return blab;
}

//4.

function nonsense(string) {
	var blab = function () {
		return alert(string);
	}
	return blab;
}
var blabLater = nonsense("Hello");
var blabAgainLater = nonsense("Hello Again")

//5.

var lastNameTrier = function(firstName) {
    var innerFunction = function(lastName) {
				console.log(firstName + " " + lastName)
    };
	
		return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'

firstNameFarmer('Jane'); //logs 'Farmer Jane'
firstNameFarmer('Lynne'); //logs 'Farmer Lynne'


//6.
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
function storyWriter() {
	var story = "";
	return {
		addWords: function(word) {
			return story = story + word;
		},
		erase: function() {
			return story = "";
		}
	}
};

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
