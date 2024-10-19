const currentUrl = window.location.href;

const timeStamp = new Date().toISOString();

const formData = currentUrl.split("?")[1].split("&");

function show(field) {
    let result = "";

    formData.forEach((e) => {
        if (e.startsWith(field)) {

            result = e.split("=")[1];
            result = result.replace("%40", "@");

            let count = result.split("+").length - 1;

            for (let i = 0; i < count; i++) result = result.replace("+", " ");

            count = result.split("%2B").length - 1;

            for (let i = 0; i < count; i++) result = result.replace("%2B", "+");

        }
    })

    return result;
}

const showInfo = document.querySelector("#form-results");

showInfo.innerHTML = `
<p>First Name: ${show("first")}</p>
<p>Last Name: ${show("last")}</p>
<p>Organization Title: ${show("organization-title")}</p>
<p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
<p>Mobile Phone Number: ${show("mobile-phone")}</p>
<p>Organization Name: ${show("org")}</p>
<p>Membership Level: ${show("membership-level")}</p>
<p>Time created: ${timeStamp}</p>
`;


// showInfo.innerHTML = `
// <p>Appointment for ${show("first")} ${show("last")}</p>
// <p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple.</p>
// <p>Your phone: ${show("phone")}</p>
// <p>Your email: <a href="mailto:${show('email')}">${show("email")}</a></p>
// `;
