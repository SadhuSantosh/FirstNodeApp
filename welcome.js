console.log("Hello World!!");
const sum=(a,b)=>(a+b);
console.log(sum(5,10));
const marks=[60,70,80,90];
console.log(Math.max(...marks));
//No DOM  commands , No window commands when we compared to browser in node.js as we have setTimeout() and setInterval() from window global object in browser, we can use the functionalities in node by the global variable called as "global"
// console.log(global);
const inputValues=process.argv;
//OR
const [,,first,second]=process.argv; //process.argv contains the valuesof command line //node index.js 25 75 (command line input)
console.log(sum(parseInt(inputValues[3]),parseInt(inputValues[2]))); //prints 100
//OR
console.log(sum(+first,+second));//prints 100

