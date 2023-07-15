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

// switch case 

let month = 6
switch (month) {
    case 1:
        console.log('jan');
        
        break;
    case 2:
        console.log('feb');
        
        break;
    case 3:
        console.log('mar');
        
        break;
    case 4:
        console.log('apr');
        
        break;
    case 5:
        console.log('may');
        
        break;
    case 6:
        console.log('jun');
        
        break;
    case 7:
        console.log('jul');
        
        break;

    default:
        console.log('no match found');
        break;
}
 
// truthy values {},[],function(){},string with value of 0 and space between --- "0" " "
let hi = {}  
if(Object.keys(hi).length==0){
    console.log('the object is empty');
}

let bye = []
if(bye.length==0){
    console.log('the array is empty');
}

let m = {language:'javascript'}
console.log(Object.values(m));
