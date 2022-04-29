const courses = [
    {
        courseName : "Angular Course",
        price : "55"
    },
    {
        courseName : "React Course",
        price : "255"
    },
    {
        courseName : "JavaScript Course",
        price : "66"
    },
    {
        courseName : "NodeJS Course",
        price : "00"
    },
];

function getCourseList(){
    const ulist = document.querySelector(".list-group");
    ulist.innerHTML= "";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const textCousrseName = document.createTextNode(course.courseName);
        li.appendChild(textCousrseName);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const textprice = document.createTextNode(course.price);
        span.appendChild(textprice)

        li.appendChild(span);
        ulist.appendChild(li);

    });


}

getCourseList();


const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => (a.price - b.price))
    getCourseList();
})
