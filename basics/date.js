const date = new Date()
console.log(date.toDateString());
console.log(date.toJSON());
console.log(date.toLocaleString());

let data = new Date(2023,5,22,11,19)
console.log(data.toDateString());
console.log(data.toLocaleString());

const owndate  = new Date("2023-06-22")
console.log(owndate.toLocaleString());
console.log(owndate.getTime());


// let timeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000));

let tarikh =  new Date()
console.log(tarikh.getFullYear());
console.log(tarikh.getDay());
tarikh.toLocaleString('default',{ month:"narrow"})

let m = {
    name:'king',
    age:29

}
console.log(m.name);


let meta = new Date(2023,5,22,11,30)
console.log(meta);
