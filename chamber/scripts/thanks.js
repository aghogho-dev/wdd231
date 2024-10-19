const currentUrl = window.location.href;

const formData = currentUrl.split("?")[1].split("&");

function show(field) {
    let result = "";

    formData.forEach((e) => {
        if (e.startsWith(filed)) {
            result = e.split("=")[1];
        }
    })
}