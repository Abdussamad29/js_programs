function number(value){
   
    console.log(value);  //console.log(value) --block scope (cannot acces the value outside the scope('{}') 

   
}

number(89)

// creating a function and holding it in a variable

//console.log(Game('halo')); ReferenceError: Cannot access 'Game' before initialization
 let Game = function (name){
   return name;
 }
 console.log(Game('halo'));


function game(name){
    return name;
    
}
console.log(game('csgo'));
