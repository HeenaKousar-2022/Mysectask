
function sandwichCalculator(bread, cheese) {
    let count=0;
    while(bread>=2 && cheese>=1) {
         count++;
         bread-=2;
         cheese-=1;
    }
      return count;
}
console.log(sandwichCalculator(30 , 10));

