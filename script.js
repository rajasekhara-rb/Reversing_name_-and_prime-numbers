// Reversing of  a string 

let name = "Budda Rajasekhara Reddy";

let arr = [];

for (let i = 0; i < name.length; i++) {
    arr[i] = name[i];
}

console.log(arr)

arr.reverse();
console.log(arr);
let reversedStr = "";
for (let i = 0; i < arr.length; i++) {
    reversedStr += arr[i];
}
console.log(reversedStr);

// using join method 
// var reversed = arr.join("");
// console.log(reversed);


// Prime numers between 2 and 50

for(let i=2; i<50; i++){
if(i%2 === 0){
    console.log(i);
}
}

