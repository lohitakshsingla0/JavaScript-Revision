console.log(this);

var user = {
    name : "Lohitaksh",
    lastName : "Singla",
    role : "ADMIN",
    
    getCourseCount : function(){
        console.log("Line 7", this);
    }
}; 

console.log(user.getCourseCount());