function howManyHundreds(num){
  var counter = 0;
  while(num>=100){
    num -= 100;
    counter++;
  }
  return counter;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(520));
console.log(howManyHundreds(894));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));