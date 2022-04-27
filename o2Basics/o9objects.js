var user = {
    name : "Lohitaksh",
    lastName : "Singla",
    role : "ADMIN",
    loginCount : 32,
    facebookSignIn : true
};

console.log(user);
console.log(user.name);

user.loginCount = 44;
console.log(user.loginCount);

console.table(user);