var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var counter = 0;
while (counter < ingredients.length){
  console.log(ingredients[counter]);
  counter++;
}

console.log("\n\n");

for (counter = 0; counter < ingredients.length; counter++){
  console.log(ingredients[counter]);
}

console.log("\n\n");
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}