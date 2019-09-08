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

