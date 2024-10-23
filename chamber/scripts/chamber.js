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

        // companyIcon.onerror = () => {
        //     console.error(`Failed to load image: ${company.icon}`);
        //     companyIcon.src = "https://placehold.co/50"
        // };

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

if (thirdSection) getData(url);




const weatherCards = document.querySelector("#weather-cards");

const lat = 4.816;
const lon = 7.009;

const key = "";
const units = "imperial";

const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;

async function apiFetch() {
    var data = "";

    try {
        const response = await fetch(urlWeather);

        if (response.ok) {
            data = await response.json()
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error(error.message);
    }

    return data;
}


function displayWeather(data) {
    const listData = data.list.filter(
        (entry, index) => entry.dt_txt.includes("12:00:00") || index === 0
    );

    for (let datum of listData) {

        let getDate = datum.dt_txt.split(" ")[0];
        let getTemp = datum.main.temp;
        let getIcon = datum.weather[0].icon;
        let getDesc = datum.weather[0].description;

        let tempFormat = `${getTemp}&deg;F`;
        let iconSrc = `https://openweathermap.org/img/w/${getIcon}.png`;

        let divEle = document.createElement("div");
        divEle.setAttribute("class", "one-card");

        let imgEle = document.createElement("img");
        imgEle.setAttribute("src", iconSrc);
        imgEle.setAttribute("alt", getDesc);

        let figCap = document.createElement("figcaption");
        figCap.textContent = getDesc;

        let imgFig = document.createElement("figure");
        imgFig.setAttribute("class", "icon-figure");

        imgFig.appendChild(imgEle);
        imgFig.appendChild(figCap);


        let pDate = document.createElement("p");
        pDate.innerHTML = `<strong>Date:</strong> ${getDate}`;

        let pTemp = document.createElement("p");
        pTemp.innerHTML = `<strong>Temp:</strong> ${tempFormat}`;

        // let pDesc = document.createElement("p");
        // pDesc.innerHTML = `<strong>Desc:</strong> ${getDesc}`;

        let secondDivEle = document.createElement("div");
        secondDivEle.setAttribute("class", "inside-card");

        secondDivEle.appendChild(pDate);
        secondDivEle.appendChild(pTemp);
        // secondDivEle.appendChild(pDesc);

        divEle.appendChild(imgFig);
        divEle.appendChild(secondDivEle);

        weatherCards.appendChild(divEle);
    }

}

if (weatherCards) {
    apiFetch().then(data => {
        console.log(data);
        displayWeather(data);
    });
}


const ads = document.querySelector("#ads");

function displaySpotlight(companies) {
    const spotlightMembers = companies.filter(company =>
        company.membership_level == 3 || company.membership_level == 2
    );

    const selectedMembers = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 2);

    ads.innerHTML = "";

    selectedMembers.forEach(company => {

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
        let memberLevel = document.createElement("p");


        businessName.textContent = company.name;
        businessAddress.textContent = company.address;

        companyIcon.setAttribute("src", company.icon);
        companyIcon.setAttribute("alt", company.name);
        companyIcon.setAttribute("loading", "lazy");
        companyIcon.setAttribute("width", "150");
        companyIcon.setAttribute("height", "150");

        // companyIcon.onerror = () => {
        //     console.error(`Failed to load image: ${company.icon}`);
        //     companyIcon.src = "https://placehold.co/50"
        // };

        email.innerHTML = `<strong>EMAIL:</strong> ${company.email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${company.phone}`;
        urlAddress.innerHTML = `<strong>URL:</strong> ${company.website}`;
        memberLevel.innerHTML = `<strong>Membership Level:</strong> ${company.membership_level === 3 ? 'Gold' : 'Silver'}`;

        divElement.setAttribute("class", "company-cards")

        divElement.appendChild(businessName);
        divElement.appendChild(businessAddress);
        divElement.appendChild(divisor);

        sessionElement.setAttribute("class", "logo-contacts")
        sessionElement.appendChild(companyIcon);

        divSep.appendChild(email);
        divSep.appendChild(phone);
        divSep.appendChild(urlAddress);
        divSep.appendChild(memberLevel);

        sessionElement.appendChild(divSep);

        divElement.appendChild(sessionElement);

        ads.appendChild(divElement);
    });
}

async function getSpotlightData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displaySpotlight(data.companies);
}

if (ads) getSpotlightData(url);