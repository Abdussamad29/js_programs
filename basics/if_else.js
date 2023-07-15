//  conditions

let num = 20
// && checks both the conditions
if(num>19 && num <21){
    console.log(`the number is ${num}`);
}
else{
    console.log('not executed');
}

let name = 'king'
let age = 34

if(name=='king' && age==34){
    console.log('executed');
}

if(2 != 3){
    console.log(true);
}

// or statement || -checks either of the conditions

const amount = 4000;
const cost = 'four_thousand'

if(amount==4000 || cost==false){
    console.log('code executed');
}