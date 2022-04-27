//Loop for in
//Loop for of


const states = ["punjab", "haryana", "delhi", "assam", 123, "456", "Kerela"];


for(const n of states){
    console.log(n);
}
/*
node o10loopsPartThree.js 
punjab
haryana
delhi
assam
123
456
Kerela*/
console.log("-------------------------------------------------");
const user = {
    name : "Lohitaksh",
    lastName : "Singla",
    role : "ADMIN",
    loginCount : 32,
    facebookSignIn : true
};

for (const n in user){
    console.log(n);
}
console.log("-------------------------------------------------");

for (const n in user){
    console.log(`${n} : ${user[n]}`);
}