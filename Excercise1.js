let greeting = "hello";
let name = "world";
let varResult = greeting.concat(" " + name); // 2 method
console.log(varResult);

let varreplace = varResult.replaceAll(/l/g,'1').replaceAll(/o/g,'0');
console.log(varreplace);

function reverseString(str){
 let newStr = "";
 for(let i = str.length-1; i>=0; i--){
    newStr += str[i];
 }
   return newStr;
}
console.log(reverseString(varreplace));









