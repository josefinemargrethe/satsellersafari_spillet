window.addEventListener("load", sidenVises);

function sidenVises() {
    //....
    showStart();
}

function showStart() {
    console.log("start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);
}

function hideStart() {
    console.log("hideStart");

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
}

function startGame() {
    console.log("startGame")

    document.querySelector("#start").classList.add("hide");
}





/***window.addEventListener("load", showStart);

function showStart() {
    //vis startskærm + animation
    //start animation på startknap

    document.querySelector("#play").addEventListener("click", hideStart);
}

//Klik på startknap

function hideStart() {
    //Stop animation på startknap
    //Fade startskærm ud

    document.querySelector("#play").classList.add("forsvind");
    document.querySelector("#start").classList.add("fade_out")


}

//Når fade-animation er færdig

function startGame() {
    //Skjul startskærm
    //Vis spilskærm
    //...
}
***/
