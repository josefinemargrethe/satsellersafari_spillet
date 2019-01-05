window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;

"use strict";
let points = 0;
let energy = 3;
let timeLeft = 15;

function sidenVises() {
    //....
    showStart();
}

function showStart() {
    console.log("start");

    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector(".aftergame").classList.remove("blur");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#start").classList.remove("fade_out");


    document.querySelector("#settings").classList.remove("show");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#start_foreground").classList.remove("hide");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings_knap").addEventListener("click", showSettings);
}

function showSettings() {
    console.log(showSettings);

    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#start_foreground").classList.add("hide");

    document.querySelector("#luk").addEventListener("click", showStart);
    //document.querySelector("#luk3").addEventListener("click", startGame);


    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);

}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();
    }



}

function soundsOff() {
    console.log("soundsOff");
    document.querySelector("#sfx").classList.remove("on");
    document.querySelector("#sfx").classList.add("off");

    document.querySelector("#sfx1").muted = true;
    document.querySelector("#sfx2").muted = true;
    document.querySelector("#sfx3").muted = true;
    document.querySelector("#winsound").muted = true;
    document.querySelector("#losesound").muted = true;




}

function soundsOn() {
    console.log("soundsOn");

    document.querySelector("#sfx").classList.remove("off");
    document.querySelector("#sfx").classList.add("on");

    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;
    document.querySelector("#sfx3").muted = false;
    document.querySelector("#winsound").muted = false;
    document.querySelector("#losesound").muted = false;

}


function toggleMusic() {
    console.log("toggleMusic");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();
    }

}

function musicOff() {
    console.log("musicOff");

    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

    document.querySelector("#myMusic").muted = true;

}

function musicOn() {
    console.log("musicOn");

    document.querySelector("#music").classList.remove("off");
    document.querySelector("#music").classList.add("on");

    document.querySelector("#myMusic").muted = false;

}


function hideStart() {
    console.log("hideStart");

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.add("show");
    document.querySelector("#startinfo").classList.remove("hide");

    //  document.querySelector("#myMusic").play();
    //    document.querySelector("#myMusic").muted = false;

    document.querySelector("#luk2").classList.add("show");

    document.querySelector("#luk2").addEventListener("click", hideInfo);
}

function hideInfo() {
    console.log("hideInfo");

    document.querySelector("#startinfo").classList.add("fade_out");
    document.querySelector("#startinfo").classList.add("hide");
    document.querySelector("#start").classList.add("hide");

    startGame();
}




function startGame() {
    console.log("startGame");

    //Nulstil fra gameover
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector(".aftergame").classList.remove("blur");
    document.querySelector("#game").classList.remove("hide");

    /*Nustil point, tid og liv
    let points = 0;
    let energy = 3;
    let timeLeft = 15;*/

    //Start spil
    document.querySelector("#game_elements").classList.remove("hide");

    document.querySelector("#figur1").addEventListener("click", clickFigur);
    document.querySelector("#figur2").addEventListener("click", clickFigur);
    document.querySelector("#figur3").addEventListener("click", clickFigur);
    document.querySelector("#figur4").addEventListener("click", clickFigur);
    document.querySelector("#figur5").addEventListener("click", clickFigur);
    document.querySelector("#figur6").addEventListener("click", clickFigur);

    document.querySelector("#myMusic").play();

    //document.querySelector("#settings_knap2").addEventListener("click", showSettings);

    nyePositioner();
    timeLeftfc();
}

function timeLeftfc() {
    console.log("timeLeftfc " + timeLeft);



    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftfc, 1000);
        document.querySelector("#tidtilbage").innerHTML = timeLeft;
    } else {
        gameOver();
    }
}

function nyePositioner() {
    console.log("nyePositioner");
    let pos = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#figur1").classList = "type1 position" + pos;

    pos = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#figur2").classList = "type2 position" + pos;

    pos = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#figur3").classList = "type3 position" + pos;

    pos = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#figur4").classList = "type1 position" + pos;

    pos = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#figur5").classList = "type2 position" + pos;

    pos = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#figur6").classList = "type3 position" + pos;
}

function clickBaby() {
    points++;
    console.log(points);
    document.querySelector("#antal").innerHTML = points;

    document.querySelector("#sfx1").currentTime = 0;
    document.querySelector("#sfx1").play();


}

function clickDiamant() {
    points--;
    console.log(points);
    document.querySelector("#antal").innerHTML = points;

    document.querySelector("#screen").classList.add("shake");

    document.querySelector("#sfx2").currentTime = 0;
    document.querySelector("#sfx2").play();

    // document.querySelector("#heart" + life).classList.add("hide");

    console.log(energy);
    console.log("select energy " + energy + "hide");

    let liv = "#liv" + energy;
    console.log(liv);
    document.querySelector(liv).classList.add("hide");
    energy--;



    //indsæt mist ét liv
}

function clickHest() {
    document.querySelector("#screen").classList.add("shake");

    console.log(energy);
    console.log("select energy " + energy + "hide");

    //    let liv = "#liv" + energy;
    // console.log(liv);

    document.querySelector("#liv1").classList.add("hide");
    document.querySelector("#liv2").classList.add("hide");
    document.querySelector("#liv3").classList.add("hide");

    energy -= 3;


    document.querySelector("#sfx3").currentTime = 0;
    document.querySelector("#sfx3").play();

}

function clickFigur() {
    console.log("clickFigur");

    if (this.classList.contains("type1")) {
        console.log("click på baby");
        clickBaby();
    } else if (this.classList.contains("type2")) {
        console.log("click på diamant");
        clickDiamant();
    } else if (this.classList.contains("type3")) {
        console.log("click på hest");
        clickHest();
    }


    console.log(this);


    nyePositioner();


    gameStatus();

}

//let harHaftGameOver = false;

function gameStatus() {
    console.log(gameStatus);

    if (points == 3) {
        levelCompleted();
    }

    if (energy <= 0) {
        gameOver();
    }
}

function gameOver() {
    console.log(gameOver);

    //harHaftGameOver = true;

    document.querySelector(".aftergame").classList.add("blur");
    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#gameover").classList.add("show");

    //lyde
    document.querySelector("#losesound").currentTime = 0;
    document.querySelector("#losesound").play();

    //document.querySelector("#tryagain2").addEventListener("click", startGame);
    document.querySelector("#tryagain").addEventListener("click", newGame);
}

function levelCompleted() {
    console.log(levelCompleted);

    document.querySelector(".aftergame").classList.add("blur");
    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#levelcomplete").classList.remove("hide");

    //lyde
    document.querySelector("#winsound").currentTime = 0;
    document.querySelector("#winsound").play();

    //document.querySelector("#tryagain2").addEventListener("click", startGame);
    document.querySelector("#tryagain2").addEventListener("click", newGame);
}


function newGame() {
    location = location.href;
}
