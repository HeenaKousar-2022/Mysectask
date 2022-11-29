const hour = new Date().getHours(); //2 Excercise
if(hour<12){
     console.log("Good Morning")
}else if(hour<17){
   console.log("Good afternoon")
}else if(hour>17 && hour<19){
    console.log("Good Evening")
}else {
    console.log("Good Night");
}

