home1El = document.getElementById("home-add-1");
home2El = document.getElementById("home-add-2");
home3El = document.getElementById("home-add-3");

homeScoreEl = document.getElementById("home-score");
homeScore = 0;

guest1El = document.getElementById("guest-add-1");
guest2El = document.getElementById("guest-add-2");
guest3El = document.getElementById("guest-add-3");

guestScoreEl = document.getElementById("guest-score");
guestScore = 0;

function homeAdd1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function homeAdd2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function homeAdd3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function guestAdd1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function guestAdd2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function guestAdd3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

