let numbers = [1,2,3];
let a = numbers[Symbol.toPrimitive] = function(){
  return 99;
}

console.log(numbers);
console.log(numbers+1);
