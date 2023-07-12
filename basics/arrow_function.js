let name = () =>{
    console.log('hi there');
}
name()

// implicit return

const model = (dell) =>('dell vostro 3590')
console.log(model());

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