function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    //Write your code here:
    let output = [];
    if(n===1){
        return [0];
    }
    if(n===2){
        return [0,1];
    }else{
        output = [0,1];
        for(let i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length -1])
        }
        return output;
    }
}

console.log(fibonacciGenerator(1))
console.log(fibonacciGenerator(2))
console.log(fibonacciGenerator(3))
console.log(fibonacciGenerator(8))