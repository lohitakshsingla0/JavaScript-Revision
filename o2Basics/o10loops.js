var states = ["punjab", "haryana", "delhi", "assam", 123, "456", "Kerela"];


for (let i = 0; i < states.length; i++) {
    if(typeof states[i] !== 'string') continue;
    console.log(states[i]);
    
}

console.log("-------------------------------------------------");
for (let i = 0; i < states.length; i++) {
    if(typeof states[i] !== 'string') break;
    console.log(states[i]);
    
}
console.log("-------------------------------------------------");
for (let i = 0; i < states.length; i++) {
    if(typeof states[i] == 'string'){
    
        console.log(states[i]);
    }
}