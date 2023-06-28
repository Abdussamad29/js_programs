const name = "dell";
const model = 3590
console.log(`I'am using ${name} laptop and the model is ${model}`);

const game = new String("zeldacon")
console.log(typeof game);
console.log(game.toLocaleUpperCase());
console.log(game.charAt(3));
console.log(game.indexOf('d'));

let newstring = game.substring(0,5)
console.log(newstring);

const otherstring = game.slice(-7, 5)
console.log(otherstring);
console.log(game.includes("con"));



let aim = " developer-web"
console.log(aim.trim());


let url = "https://king.com/%20unknown";
console.log(url.replace("20","29"))

console.log(aim.split("-"));

let Game =  new String("super mario")
console.log(Game.split(" "));

