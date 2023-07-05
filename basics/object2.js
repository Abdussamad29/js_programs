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

//other way to print the above program

let total = {...user,...other_user}
console.log(total);

//working with arrays

const worker = [
    {
        id : '123acs',
        designation:'janitor'
    },
    {
        salary:'12k',
        bonus:'2k'

    }
]

console.log(worker[0].id);
console.log(worker[0].designation);

console.log(worker[1].salary);

//some more object methods

console.log(Object.keys(other_user));
console.log(Object.values(other_user));
console.log(Object.entries(other_user));

// to check the existance og the property in the object

console.log(other_user.hasOwnProperty('name2'));
console.log(user.hasOwnProperty('name'));