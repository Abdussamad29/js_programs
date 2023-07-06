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