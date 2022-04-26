var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is the admin with all the access`;
            break;

        case "subadmin":
            return `${name} is the sub-admin with access to create and delete tables`;
            break;

        case "tester":
            return `${name} is the tester with access to testing workgroups`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

var value1 = getUserRole("Lohit","tester");

console.log(value1);

console.log(getUserRole("Lohit","tester"));