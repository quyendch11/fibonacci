import { Fibonacci } from "./fibonasi";
 let fibonacci3 : Fibonacci[]=[];
for (let i = 0; i <10; i++) {
    let fibonacci2 = new Fibonacci(i)
    fibonacci3.push(fibonacci2.fibonacci(i) );
   
}
//console.log(fibonacci3)
function sum(...fibonacci3){
    let sum1 = 0;
    for(let i of fibonacci3) {
    sum1 += i;
    }  
    return sum1;
}
console.log(sum(...fibonacci3));
