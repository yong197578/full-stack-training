//
// let output = [];
// let count = 1;
//
// function fizzBuzz() {
//     if(count % 3 === 0 && count %5 === 0){
//         output.push("fizzBuzz");
//     }else if(count % 3 === 0){
//         output.push("fizz");
//     }else if(count %5 === 0) {
//         output.push("buzz");
//     }else {
//        output.push(count);
//     }
//     count++;
// }

// function fizzBuzz2() {
//     for(let i = 0; i <= 100; i++){
//         if(i %3 === 0 && i %5 ===0){
//             console.log("FizzBuzz")
//         }else if(i%3 === 0){
//             console.log("Fizz")
//         }else if(i%5 === 0){
//             console.log("Buzz")
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz2();

let output = [];
let count = 1
function fizzBuzz3() {
    while(count <=100){
        if(count %3 === 0 && count %5 ===0){
            console.log("FizzBuzz")
        }else if(count%3 === 0){
            console.log("Fizz")
        }else if(count%5 === 0){
            console.log("Buzz")
        }else{
            console.log(count)
        }
      count++;
    }
}
fizzBuzz3()