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

    login(){
        return "You are logged in";
    }
}


class SubAdmin extends User{

    constructor(name, email){
        super(name, email);
    }

    getAdminAInfo(){
        return "I Am ADMIN";
    }
}

const tom = new SubAdmin("tom","tomandjerry@gmail.com");

console.log(tom.getAdminAInfo());
console.log(tom.login());
console.log(tom.getInfo());

//let lohit = User("Lohitaksh", "lohitakshsingla0@gmail.com" )


module.exports = User;

// const ad = new User ("Adwaith","ad@234.com")
// ad.enrollCourse("Reactaaaa");

// console.log(ad.getCourseName());
// console.log(ad.courseList);