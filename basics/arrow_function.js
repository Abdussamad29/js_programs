let name = () =>{
    console.log('hi there');
}
name()

// implicit return

const dell = (model) =>('dell vostro 3590')
console.log(dell());

const game = (cricket) =>(cricket)
console.log(game('cricket'));


let func = () =>{
    console.log(this);// returns an empty object
}
func()

//but regular function return whole properties of this keyword

function main(){
    console.log(this);
}
main()

console.log(Object.keys("arrow"));
console.log(Object.values("arrow"));
console.log(Object.entries("arrow"));
