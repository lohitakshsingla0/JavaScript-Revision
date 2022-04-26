var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;


// if(isLoggedIn){
//     console.log("Logged in Successfully");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }else{
//     console.log("Logging in is unsuccessful");
// }


if(isEmailVerified && isLoggedIn && cardInfo){
    console.log("Allow user to make purchase");

}

else{

    console.log("not allowed");
}