const menuBtn = document.querySelector("#menuBtn");
const navigation = document.querySelector("#navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

const getYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

const today = new Date();

getYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`


const url = "https://aghogho-dev.github.io/wdd231/chamber/data/members.json"

const thirdSection = document.querySelector("#third-section");

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayData(data.companies);
}

const displayData = (companies) => {
    companies.forEach((company) => {

        let divElement = document.createElement("div");
        let businessName = document.createElement("h2");
        let businessAddress = document.createElement("p");
        let divisor = document.createElement("hr");

        let sessionElement = document.createElement("section");
        let companyIcon = document.createElement("img");

        let divSep = document.createElement("div");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let urlAddress = document.createElement("p");


        businessName.textContent = company.name;
        businessAddress.textContent = company.address;

        companyIcon.setAttribute("src", company.icon);
        companyIcon.setAttribute("alt", company.name);
        companyIcon.setAttribute("loading", "lazy");
        companyIcon.setAttribute("width", "150");
        companyIcon.setAttribute("height", "150");

        companyIcon.onerror = () => {
            console.error(`Failed to load image: ${company.icon}`);
            companyIcon.src = "https://placehold.co/50"
        };

        email.innerHTML = `<strong>EMAIL:</strong> ${company.email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${company.phone}`;
        urlAddress.innerHTML = `<strong>URL:</strong> ${company.website}`;

        divElement.setAttribute("class", "company-cards")

        divElement.appendChild(businessName);
        divElement.appendChild(businessAddress);
        divElement.appendChild(divisor);

        sessionElement.setAttribute("class", "logo-contacts")
        sessionElement.appendChild(companyIcon);

        divSep.appendChild(email);
        divSep.appendChild(phone);
        divSep.appendChild(urlAddress);

        sessionElement.appendChild(divSep);

        divElement.appendChild(sessionElement);

        thirdSection.appendChild(divElement);

    });
}

getData(url);

