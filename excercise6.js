const vegetables = ["carrot", "tomato","brinjal","onion"];
const mapRes = vegetables.map(function(value){
    return value.charAt(0).toUpperCase()+value.slice(1);
})
console.log(mapRes);