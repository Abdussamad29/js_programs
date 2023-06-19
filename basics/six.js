 let m = Symbol(1)
 let j = Symbol(2)
 console.log(m===j);

 let n = 1234
 let y = String(n)
 console.log(typeof y );

 let age = 12
 let othername = age
  othername = 23
  console.log(age);
  console.log(othername);
 console.log(age===othername);


 let lge  = "king"
 let d = parseInt(lge)
 console.log(typeof lge);

let g = {
    email:"@123",
    age:12,
    name:"who"

}

let h = g
h.age = 15
console.log(g.age);
console.log(h.age);