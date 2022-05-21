let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

console.log(user);

// //

let fruits = {};

function isEmpty(fruits) {

    for (let key in fruits) {
        return false;
        
    }

    return true;

}

fruits['apple'] = 5;

console.log( isEmpty(fruits) );

// // // //

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// function result(key) {

//     for ( let key in salaries) {
//         return 
//     }
    
// }

// (не решено);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };



function multiplyNumeric(menu) {
    
for (let key in menu) {
    if(typeof menu[key] === "number") {
    menu[key] *= 2
    }
}
}

multiplyNumeric(menu);

console.log(menu);

