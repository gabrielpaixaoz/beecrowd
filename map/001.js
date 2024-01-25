const numeros = [0,1,2,3,4,5];
numeros.forEach(myFunction);

function myFunction(item, index, arr){
   if(item % 2 === 0){
    console.log(index + ' é par')
   }else{
    console.log(index + ' é impar')
   }
}

