let user = {}

user.name = 'james',
user.age = 43,
user.address = 'finland'

console.log(user);

let other_user = {
    name2 : 'patrick',
    age2:44,
    address2:'malta'
}

let result = Object.assign({},user,other_user)
console.log(result);