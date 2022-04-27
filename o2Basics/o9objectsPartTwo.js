var user = {
    name : "Lohitaksh",
    lastName : "Singla",
    role : "ADMIN",
    loginCount : 32,
    facebookSignIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.name} is enrolled in total of ${this.courseList.length} courses`;
    }
};

console.log(user.name);
console.log(user.getCourseCount());

user.buyCourse("React JS Course");
user.buyCourse("Angular  Course");
user.buyCourse("NodeJS Course");

console.log(user.getCourseCount());