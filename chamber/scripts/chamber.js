const menuBtn = document.querySelector("#menuBtn");
const navigation = document.querySelector("#navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
});