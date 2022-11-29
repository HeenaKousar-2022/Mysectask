var a = 12;                         //1st question
(function() {
console.log(a);
})();                                 // 12


var a = 5;                        //2nd question
(function() {
var a = 12;
console.log(a);
})();                             //12


var a = 10;                    //3rd question
var x = (function() {
var a = 12;
return (function() {
console.log(a);
});
})();
x();                          //12 


var a = 10;                 //4th question
var x = (function() {
var y = function() {
var a = 12;
};
return function() {
console.log(a);
}
})();
x();                               //10

var a = 10;                        //5th question
var x = (function() {
(function() {
a = 12; // <<< look carefully at this line.
})();
return (function() {
console.log(a);
});
})();
x();                              //12


var a = 10;                      //6th question
(function() {
var a = 15;
window.x = function() {
console.log(a);
}
})();
x();                           //15                   
 
