// const courseList = [
//     "CSE 110",
//     "WDD 130",
//     "CSE 111",
//     "CSE 210",
//     "WDD 131",
//     "WDD 231",
// ]

const courseList = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
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


    // const selectCourse = document.querySelector("#select-course");
    const courseDiv = document.querySelector("#course-list");

    function createCourseTemplate(listCourses) {
        courseDiv.innerHTML = "";

        listCourses.forEach((course) => {
            let enterCourse = document.createElement("span");

            enterCourse.textContent = `${course.subject} ${course.number} | credits: ${course.credits} | completed: ${course.completed}`;

            if (!course.completed) enterCourse.setAttribute("style", "background-color:#8C6D1F");

            enterCourse.classList.add("course-span");

            courseDiv.appendChild(enterCourse);
        });
    }

    createCourseTemplate(courseList);

    // const courseListSubject = courseList.map((course) => course.subject);
    const totalCredit = document.querySelector("#total-credit");

    function filterTemplate(filter) {
        switch (filter) {
            case "ALL":
                createCourseTemplate(courseList);
                break;
            case "CSE":
                createCourseTemplate(courseList.filter(course => course.subject.startsWith("CSE")));
                break;
            case "WDD":
                createCourseTemplate(courseList.filter(course => course.subject.startsWith("WDD")));
                break;
            default:
                createCourseTemplate(courseList);
                break;
        }
    }

    filterCredit("ALL");


    document.querySelectorAll("#select-course .course").forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.id.toUpperCase();
            filterTemplate(filter);
            filterCredit(filter);
        });
    });

    function filterCredit(filter) {
        let total = 0;
        switch (filter) {
            case "ALL":
                total = courseList.reduce((total, course) => total + course.credits, 0);
                break;
            case "CSE":
                total = courseList.filter(course => course.subject.startsWith("CSE")).reduce((total, course) => total + course.credits, 0);
                break;
            case "WDD":
                total = courseList.filter(course => course.subject.startsWith("WDD")).reduce((total, course) => total + course.credits, 0);
                break;
            default:
                total = courseList.reduce((total, course) => total + course.credits, 0);
                break;
        }

        totalCredit.innerHTML = `Total credits: ${total}`;
    }


});