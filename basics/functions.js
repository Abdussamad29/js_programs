function addTwoNumbers(num1,num2){
    return num1 + num2
}
console.log(addTwoNumbers(20,9));

// other way 

function twoNumbers(n1,n2) {
    console.log(n1*n2);
    
}
twoNumbers(12,4)


function name(Name){
   let person = 'bill'
    if(Name===person){
        return(`hi there ${Name}`)
    }
    else{
        return('fails')
    }
}
console.log(name('bill'))

//rest operator

//... helps to print the all values and return it in an array

function clothesPrice(...price){  
    return price
}
console.log(clothesPrice(200,400,500))

//making function from object

let object = {
    company:'dell',
    price:'45k',
    yr_bought:2020
}
function device(laptop){
    console.log(`the price of the laptop is ${laptop.price}`);
  
}
device(object)

// objects can also be defined on the fly


function individual(user){
    return user;
}

 let man= individual(user={id:'123@.com',status:'jobless',location:'asia'})
 console.log(man);


function box(container){
    console.log(`${container.item}`);
}
box({
    item:'bat',
    item2:'ball'
})


 let game ={
    play:'cricket',
    players:11
 }

 game.func = function(){
    console.log(`there are ${this.players} players in ${this.play}`);
 }
 game.func()


