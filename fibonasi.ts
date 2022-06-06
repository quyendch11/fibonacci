export class Fibonacci {
   n : number;
constructor(n : number){
    this.n = n;
}
fibonacci(n : number){
    if(n<0){
        return -1;
    }
    else if(n==0||n==1){
        return n ;
    }
    else{
        return this.fibonacci(n-1)+ this.fibonacci(n-2);
    }
}

}