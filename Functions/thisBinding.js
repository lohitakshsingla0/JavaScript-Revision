const lohit = {
    fname : "Lohitaksh",
    lname : "Singla", 
    role : "Admin",
    courseCount : 4,
    getInfo : function(){
        console.log(`
        First name is ${this.fname}
        Last name is ${this.lname}
        ROle is ${this.role}
        `);
    }
};

const abc = {
    fname : "ABCDDS",
    lname : "dsdsdsdsdsd",
    role : "Sub-Admin",
    courseCount : 6
}

//Binding
lohit.getInfo();
var abcInfo = lohit.getInfo.bind(abc);
abcInfo();