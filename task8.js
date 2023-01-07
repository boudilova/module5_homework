//задание 8
let anyMap= new Map();

 anyMap.set(1, 'value1');
 anyMap.set('2', 'value2');
 anyMap.set(true, 15);

for (let elem of anyMap){
  console.log(`ключ ${elem[0]} значение ${elem[1]}`);
}