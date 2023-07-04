let obj = {
    name:'patrick',
    age:29,
    location:"uk",
    employed:false
}

console.log(obj.employed);
console.log(obj['name']);

// function

obj.user = function(){
    console.log(`this program prints the age of the user that is  ${this.age} `);
}
console.log(obj.user());

Object.freeze(obj)

obj.location = "us"
console.log(obj);  // -> this function restricts the program from changing its value