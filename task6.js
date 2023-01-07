
//Задание 6.

const arr=[5,5,6];

function uniqueArr() {
let uArr = Array.from( new Set( arr) );
  return uArr.length == 1
}
console.log(uniqueArr(arr));

/*
мне кажется тут проще не циклом делать 
*/