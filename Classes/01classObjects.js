//import User from "./01classes";

const User = require("./01classes.js");

const lohit =  new User("Lohitaksh", "lohitakshsingla0@gmail.com");

console.log(lohit.getInfo());
console.log(lohit.getInfo().email);

lohit.enrollCourse("React");
lohit.enrollCourse("Angular");
lohit.enrollCourse("NodeJS");

//console.log(lohit.getCourseName());

let courses = lohit.getCourseName();
console.log(`User ${lohit.getInfo().name} is enrolled in ${courses.length} which all are mentioned below:`);
courses.forEach(x => {
    console.log(x);
    
});