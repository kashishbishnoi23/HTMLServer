// self-invoking functions:
(function foo(){
    console.log("hello");
    document.getElementById("tag1").innerHTML = "Hello World from Javascript";

    // document -> object, document.getElementById("tag1") -> returns an element (which is an object) -> .innerHTML is a property of that object -> that's why it says cannot set "properties" of null and it does'nt say "value" of null -> runtime error  

    // ? lagane se Uncaught SyntaxError: Invalid left-hand side in assignment  -> null ko ? assign kr rahe hain -> compile-time error 

    // ? is used for reading properties and not for writing 

    /*
    for reading
    let user = {};
    console.log(user.address.city);  // will throw an error -> cannot read properties of undefined (reading 'city')

    console.log(user.address?.city) // will check if address exists -> if it does'nt exist -> returns undefined , no error

    but when we use it to set values -> ise pata nhi chlta what to do if that value is undefined -> ignore the assignment or throw an error -> so js throws a syntax error

    */

    /*

    client-side rendering -> browser hi sab kuch render krega -> static html, dynamically bhi data insert krna hai -> done by browser -> slow

    server-side rendering -> apis wagrah call krke sara data html me insert krke browser ko bhejta hai -> browser sirf css add krta hai -> css is only added at frontend, not at the server

    */

    /* everything in javascript is an object -> in browser var x = 10 -> will show properties/methods for x 
    */





})();

// set time out: delay the execution of something by some time -> it itself is a method -> which takes 2 parameter -> a function and delay 

// set time out ki khud ki responsibility hai to call that function after a while

function foo1(){
    console.log("Hello chitkara");
}

setTimeout(foo1, 2000);
// let productList = "";

function loadData(renderProducts){

setTimeout(() => {
// productList = [
//     {name: "Kinder Joy", price: "50"}, 
//     {name:"Dairy Milk", price:"30"}
// ]

renderProducts(); // ab productList initialise hone pe products render honge

}, 2000) // 2 second baad initialise hoga

}

// loadData();




/*

let timeoutid = setTimeout(()=>{
    console.log("hello")
    }, 5000);

    clearTimeout(timeoutid) -> 5 seconds poore hone se pehle hi timeout cancel ho jayega -> so the function wont run


*/

// setTimeout(loadData, 1000);


// hoisting -> ek variable ya function ki declaration ko uske inner most function ke top pe le jayega -> just the declration not the initialisation


/*

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope (before code execution), allowing you to use them before they are actually written in the code.




*/

sayHello(); // works -> hoisted 

// console.log(x); // here, it throws an error -> x is not defined

// map function -> used with arrays -> isme pass hota hai ek callback function -> which will be executed on each element of the array -> returns a new array 

var array = [1,2,3,4,5];

array.map((elem, index)=>{
    document.getElementById("array").innerHTML += `${elem}`
})

function print(arg){
    console.log(arg);
}

const print2 = (arg) => {
    console.log(print2);
} 

// callback function -> a function becomes a callback function only when it's passed to other function 
function Addproducts(){

    // check lagado -> if productList is not available -> don't go neeche -> yaha async await kaam ata hai -> jab tak data nahi aata tab tak aage mat badho:

    // if (productList.length == 0){
    //     document.getElementById("data").innerHTML = "Loading data from server ...";
    //     return;
    // }
    

    function renderProducts(){

    document.getElementById("data").innerHTML = `
    <table>
      <thead>
        <tr>
        <th> Sr No.</th>
         <th>  Product </th>
        <th> Price
       <th/>
        </tr>
      </thead>

      <tbody>
       ${
        // throws an error : because productList is not initialised yet -> will be done after 2 seconds
        productList.map((product, index)=> {
            return `
            <tr>
            <td> ${index + 1} </td>
            <td class="product"> ${product.name} </td>
            <td class="product" > ${product.price} </td> 
            </tr>
            `
        }  )
       }
      </tbody>
    </table>
    `
    }

    loadData(renderProducts); // rebderProducts ek callback function hai yaha -> cuz it is passed as an arguement
}

Addproducts();

function sayHello(){
    console.log("hello kashish");
    console.log(x); // undefined

    if (true){
        var x = 10;
        console.log(x);
        // ab x ki declaration ko ye iske inner most function -> sayHello() -> k top pe le jayega -> just the declaration and not the initialisation , that's why it says undefined and not 10 -> cuz var x moves to the top of sayHello(), but its value stays here only
    }
}


setTimeout(()=>{
    console.log("set time out 0");
}, 0)

/*
Even though the delay is 0, it tells the JavaScript engine:

“Please wait until the current code is done running, then run this.”
*/

function sampleFunction(){
    console.log(arguments) // automatically creates an Arguement object -> arguments[0] -> return the first argument passed
}

const sampleFunction2 = (args) =>{
    console.log(args);
}

sampleFunction('nameste','vaddkaam')
sampleFunction2('nameste2')










