const visitorMessageEl = document.getElementById('visitor-message');


function checkLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    const message = getVisitMessage(lastVisit, now);

    localStorage.setItem('lastVisit', now.toISOString());


    if (message) {
        visitorMessageEl.innerHTML = message;
    }
}


function getVisitMessage(lastVisit, now) {
    if (!lastVisit) {
        return "Welcome! Let us know if you have any questions.";
    }

    const lastVisitDate = new Date(lastVisit);
    const timeDiff = Math.abs(now - lastVisitDate);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    console.log(daysDiff);

    if (daysDiff < 1) {
        return "Back so soon! Awesome!";
    } else {
        return `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
    }
}

window.onload = checkLastVisit;
