const courseList = [
    "CSE 110",
    "WDD 130",
    "CSE 111",
    "CSE 210",
    "WDD 131",
    "WDD 231",
]


document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector("nav");
    const menu = document.querySelector("#menu");

    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
        menu.classList.toggle("open");
    });

    const getYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    const today = new Date();

    getYear.innerHTML = `${today.getFullYear()}`;
    lastModified.innerHTML = `Last Update: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`


    const selectCourse = document.querySelector("#select-course");
    const courseDiv = document.querySelector("#course-list");

    function createCourseTemplate(listCourses) {
        courseDiv.innerHTML = "";

        listCourses.forEach((course) => {
            let enterCourse = document.createElement("span");

            enterCourse.textContent = course;

            // enterCourse.setAttribute()

            enterCourse.classList.add("course-span");

            courseDiv.appendChild(enterCourse);
        });
    }

    createCourseTemplate(courseList);

    function filterTemplate(filter) {
        switch (filter) {
            case "ALL":
                createCourseTemplate(courseList);
                break;
            case "CSE":
                createCourseTemplate(courseList.filter(course => course.startsWith("CSE")));
                break;
            case "WDD":
                createCourseTemplate(courseList.filter(course => course.startsWith("WDD")));
                break;
            default:
                createCourseTemplate(courseList);
                break;
        }
    }

    document.querySelectorAll("#select-course .course").forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.id.toUpperCase();
            filterTemplate(filter);
        });
    });

});