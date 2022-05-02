class User{
    constructor (name, email){
        this.name =name;
        this.email= email;
    }

    #courseList = [];
    getInfo(){
        return {
            name: this.name,
            email: this.email
        }
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }
     
    getCourseName(){
        return this.#courseList;
    }
}

//let lohit = User("Lohitaksh", "lohitakshsingla0@gmail.com" )


module.exports = User;


const ad = new User ("Adwaith","ad@234.com")
ad.enrollCourse("Reactaaaa");

console.log(ad.getCourseName());
console.log(ad.courseList);