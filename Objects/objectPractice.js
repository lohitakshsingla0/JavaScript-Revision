var user = function(name, courseCount){
    this.name = name;
    this.courseCount=courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`);
    }
};
user.prototype.getFirstName = function(){
    console.log(`your nam is ${this.name}`);
};


var lohit = new user("Lohit", 2);
//console.log(lohit);
lohit.getCourseCount();
lohit.getFirstName();


var sarthak = new user("Sarthak", 2);
//console.log(sarthak);
sarthak.getCourseCount();
sarthak.getFirstName();


var Lovish = new user("Lovish", 2);
//console.log(Lovish);
Lovish.getCourseCount();
Lovish.getFirstName();


