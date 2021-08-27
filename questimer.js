// console.log("--start--")
// var z;
// function product(x,y,callback){
//     setTimeout(function(){
//         z=x*y
//         console.log("--process--")
//         callback(z)
//     },5000)
   
// }
// product(5,6,function(r){
//     console.log("result",r)
// })
// console.log("--end--")





// console.log("start")
// function product(x,y){
//     var z=x*y;
//     console.log("process")
//     return z
    
// }
// var r=product(5,6)
// console.log("result", r)
// console.log("------end----")

// console.log("start")
// function product(x,y){
//     var z=x*y;
//     console.log("process")
//     return z
// }
// var r=product(5,6)
// console.log("result",r)
// console.log("---end------")




// const fun2= ()=>{
//     console.log("fun2 is starting");

// }
// const fun1 =() =>{
//     console.log("fun1 is starting");
//     fun2();
//     console.log("fun1 is ending")
// }
// fun1();




// const fun2= ()=>{
//     console.log("fun2 is starting");

// }
// const fun1 =() =>{
//     console.log("fun1 is starting");
//     fun2();
//     console.log("fun1 is ending")
// }
// fun2();



// const fun2= ()=>{
//     setTimeout( () => { 
//     console.log("fun2 is starting")},3000);

// }
// const fun1 =() =>{
//     setTimeout( () => { 
//     console.log("fun1 is starting")}, 4000);
//     fun2();
//     console.log("fun1 is ending")
// }
// fun1();




// console.log("hii");
// setTimeout (() => { 
//     console.log("pihu");},3000)


// console.log("kuilu");


// Doubt

// var messsg =console.log("hey");

// function f1(){
//      setTimeout(() => {
//          console.log("f1 is starting");
//          console.log("f1 is ending");},1000);
//      }
// function f2(){
//     setTimeout( () => {
        
//             console.log("f2 is starting")
//             f1();
//             console.log("f2 is ending");},3000);
//         }
//         f2();
    





// const funA =() =>{
//     console.log('welcome funA');

// }
// const funB = ()=>{
//     setTimeout( ()=>{
        
   
//     console.log("welcome funB"); },5000);

// }
// const funC =() =>{
//     setTimeout( () => {
//         console.log('welcome funC');}, 4000);
// }
// const funD =() =>{
//     setTimeout( () => {console.log('welcome funD');},8000)
// }
// const funF =() =>{
    
//     setTimeout( () => {console.log('welcome funF');},9000)

// }
// const funG =() =>{
   
//     setTimeout( () => {
//         console.log('welcome funG');},11000)
// }
// const funE =() =>{
//     console.log('welcome funE');

// }
// funG();
// funE();
// funB();
// funA();
// funC();
// funD();
// funF();



// const perOne =(friend,callfrnd) =>{
//     console.log(`i m busy right now i'm talking to ${friend}. ill call uh back`);
//     callfrnd();
// }
// const perTwo = ()=>{
//     console.log("hey whtsp will cll uh bck")

// } 
// perOne("neha", perTwo)




// function greet(name){
//     console.log( `hi ${name}`)
// }
// greet('nehu')



// function greet(name){
//     console.log(`hello ${name}`)
// }
// greet ('nehu')




// const perOne =(friend,callfrnd) =>{
//         console.log(`i m busy right now i'm talking to ${friend}. ill call uh back`);
//         callfrnd();
//     }
//     const perTwo = ()=>{
//         console.log("hey whtsp will cll uh bck")
    
//     } 
//     perOne("neha", perTwo)
    




    // const perValue1=() =>{
    //     console.log("hiiiiii");
        
    // }
    // const perValue2 =(friend,calldd)=>{
    //     console.log(`hey how are you ${friend}`)
    //     calldd();
    // }
    // perValue2("kuku", perValue1)

    


    // function greet(name,callValue) { 
    //     console.log(`hiii ${name}`);
    //   callValue();
    // }
    
    //     function callMe() { 
    //     console.log("hello");
    //     }
    //     greet("neha",callMe)





// function greet (name,xyz){
//     console.log(`heelooo ${name}`)
//     xyz();
// }
//    function callMe(){
//        console.log("hiii");
//    }
// greet ('neha',callMe)
       
    



// function greet(name){
//     console.log(`Hiii ${name}`);
// }
// function sayName(){
//     console.log("hy")
// }
// setTimeout(sayName,2000)
// greet('John');





// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);






