
//Задание 7.

const arr2 = [1,3,4,'ddd',false,null,undefined,NaN];
let oddCounter=0; 
let evenCounter=0;
let nullCounter=0;

for (let i=0; i<arr2.length; i++){
  if ( typeof arr2[i] !=='boolean' && isFinite( arr2[i] )){
    if ( arr2[i]%2 === 0 && arr2[i] !== null ){
    evenCounter++;  
    }else if ( arr2[i] == null ){
      nullCounter++;
    }else {
      oddCounter++;
    }
  }  
} 
console.log('четных - '+evenCounter +'; нечетных - '+oddCounter + '; null - ' + nullCounter);

/*
в качестве нулевого значения рассматриваю null,
потому как 0  с точки зрения математики - четное значение
 */