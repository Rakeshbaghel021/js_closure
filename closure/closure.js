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

