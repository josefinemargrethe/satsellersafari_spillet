window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;

"use strict";
let points = 0;
let energy = 3;

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


}

function soundsOn() {
    console.log("soundsOn");

    document.querySelector("#sfx").classList.remove("off");
    document.querySelector("#sfx").classList.add("on");

    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;
    document.querySelector("#sfx3").muted = false;

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

    /*document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector(".aftergame").classList.remove("blur");
    document.querySelector("#game").classList.add("hide");*/


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
    document.querySelector("#points").innerHTML = points;

    document.querySelector("#sfx1").currentTime = 0;
    document.querySelector("#sfx1").play();


}

function clickDiamant() {
    points--;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

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

    let liv = "#liv" + energy;
    console.log(liv);
    document.querySelector(liv).classList.add("hide");
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


function gameStatus() {
    console.log(gameStatus);

    if (points == 5) {
        levelCompleted();
    }

    if (energy <= 0) {
        gameOver();
    }
}

function gameOver() {
    console.log(gameOver);
    document.querySelector(".aftergame").classList.add("blur");
    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#gameover").classList.add("show");


    document.querySelector("#tryagain").addEventListener("click", newGame);
}

function levelCompleted() {
    console.log(levelCompleted);

    document.querySelector(".aftergame").classList.add("blur");
    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#levelcomplete").classList.remove("hide");

    document.querySelector("#tryagain2").addEventListener("click", newGame);
}


function newGame() {
    location = location.href;
}

/*
function startGame() {
    console.log("startGame");
    /*
        document.querySelector("#baby1").classList.remove("hide");
        document.querySelector("#baby1").classList.add("in_out1");

        document.querySelector("#baby2").classList.remove("hide");
        document.querySelector("#baby2").classList.add("in_out3");

        document.querySelector("#baby3").classList.remove("hide");
        document.querySelector("#baby3").classList.add("in_out5");

        document.querySelector("#baby4").classList.remove("hide");
        document.querySelector("#baby4").classList.add("in_out2");

        document.querySelector("#baby5").classList.remove("hide");
        document.querySelector("#baby5").classList.add("in_out4");

        document.querySelector("#baby6").classList.remove("hide");
        document.querySelector("#baby6").classList.add("in_out6");

        document.querySelector("#baby7").classList.remove("hide");
        document.querySelector("#baby7").classList.add("in_out1");

        document.querySelector("#baby8").classList.remove("hide");
        document.querySelector("#baby8").classList.add("in_out3");

    document.querySelector("#baby9").classList.remove("hide");
    document.querySelector("#baby9").classList.add("in_out1");

    document.querySelector("#baby10").classList.remove("hide");
    document.querySelector("#baby10").classList.add("in_out1");

    //heste

    document.querySelector("#hest1").classList.remove("hide");
    document.querySelector("#hest1").classList.add("in_out1");

    document.querySelector("#hest2").classList.remove("hide");
    document.querySelector("#hest2").classList.add("in_out1");
    /*
        document.querySelector("#hest3").classList.remove("hide");
        document.querySelector("#hest3").classList.add("in_out1");

        document.querySelector("#hest4").classList.remove("hide");
        document.querySelector("#hest4").classList.add("in_out3");

        document.querySelector("#hest5").classList.remove("hide");
        document.querySelector("#hest5").classList.add("in_out5");

        document.querySelector("#hest6").classList.remove("hide");
        document.querySelector("#hest6").classList.add("in_out2");

        document.querySelector("#hest7").classList.remove("hide");
        document.querySelector("#hest7").classList.add("in_out4");

        document.querySelector("#hest8").classList.remove("hide");
        document.querySelector("#hest8").classList.add("in_out6");

        document.querySelector("#hest9").classList.remove("hide");
        document.querySelector("#hest9").classList.add("in_out1");

        document.querySelector("#hest10").classList.remove("hide");
        document.querySelector("#hest10").classList.add("in_out3");

        //diamanter

        document.querySelector("#diamant1").classList.remove("hide");
        document.querySelector("#diamant1").classList.add("in_out5");

        document.querySelector("#diamant2").classList.remove("hide");
        document.querySelector("#diamant2").classList.add("in_out2");

        document.querySelector("#diamant3").classList.remove("hide");
        document.querySelector("#diamant3").classList.add("in_out4");

    document.querySelector("#diamant4").classList.remove("hide");
    document.querySelector("#diamant4").classList.add("in_out1");

    document.querySelector("#diamant5").classList.remove("hide");
    document.querySelector("#diamant5").classList.add("in_out1");
    /*
        document.querySelector("#diamant6").classList.remove("hide");
        document.querySelector("#diamant6").classList.add("in_out3");

        document.querySelector("#diamant7").classList.remove("hide");
        document.querySelector("#diamant7").classList.add("in_out5");

        document.querySelector("#diamant8").classList.remove("hide");
        document.querySelector("#diamant8").classList.add("in_out2");

        document.querySelector("#diamant9").classList.remove("hide");
        document.querySelector("#diamant9").classList.add("in_out4");

        document.querySelector("#diamant10").classList.remove("hide");
        document.querySelector("#diamant10").classList.add("in_out6");
    */
//Eventlisteners
/*
        document.querySelector("#baby1").addEventListener("click", clickBaby);
        document.querySelector("#baby2").addEventListener("click", clickBaby);
        document.querySelector("#baby3").addEventListener("click", clickBaby);
        document.querySelector("#baby4").addEventListener("click", clickBaby);
        document.querySelector("#baby5").addEventListener("click", clickBaby);
        document.querySelector("#baby6").addEventListener("click", clickBaby);
        document.querySelector("#baby7").addEventListener("click", clickBaby);
        document.querySelector("#baby8").addEventListener("click", clickBaby);

    document.querySelector("#baby9").addEventListener("click", clickBaby);
    document.querySelector("#baby10").addEventListener("click", clickBaby);

    document.querySelector("#hest1").addEventListener("click", clickHest);
    document.querySelector("#hest2").addEventListener("click", clickHest);
    /*
    document.querySelector("#hest3").addEventListener("click", clickHest);
    document.querySelector("#hest4").addEventListener("click", clickHest);
    document.querySelector("#hest5").addEventListener("click", clickHest);
    document.querySelector("#hest6").addEventListener("click", clickHest);
    document.querySelector("#hest7").addEventListener("click", clickHest);
    document.querySelector("#hest8").addEventListener("click", clickHest);
    document.querySelector("#hest9").addEventListener("click", clickHest);
    document.querySelector("#hest10").addEventListener("click", clickHest);

    document.querySelector("#diamant1").addEventListener("click", clickDiamant);
    document.querySelector("#diamant2").addEventListener("click", clickDiamant);
    document.querySelector("#diamant3").addEventListener("click", clickDiamant);

    document.querySelector("#diamant4").addEventListener("click", clickDiamant);
    document.querySelector("#diamant5").addEventListener("click", clickDiamant);
    /*
    document.querySelector("#diamant6").addEventListener("click", clickDiamant);
    document.querySelector("#diamant7").addEventListener("click", clickDiamant);
    document.querySelector("#diamant8").addEventListener("click", clickDiamant);
    document.querySelector("#diamant9").addEventListener("click", clickDiamant);
    document.querySelector("#diamant10").addEventListener("click", clickDiamant);

}

let point = 0;
let energy = 3;

function clickBaby() {
    console.log("click baby");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    document.querySelector("#game_elements").classList.add("paused");
    document.querySelector("#game_elements").classList.add("hide");

    newPos1();
}

function clickHest() {
    console.log("click hest");
    point--;
    console.log(point);

    document.querySelector(".antal").textContent = point;

    document.querySelector("#game_elements").classList.add("paused");
    document.querySelector("#screen").classList.add("shake");
    document.querySelector("#game_elements").classList.add("hide");

    newPos1();
}

function clickDiamant() {
    document.querySelector("#game_elements").classList.add("paused");
    document.querySelector("#screen").classList.add("shake");
    document.querySelector("#game_elements").classList.add("hide");

    energy--;

    console.log("click diamant");

    console.log(energy);

    let heart = ".heart" + energy;
    document.querySelector(".heart").classList.add("hide");

    console.log("du har " + heart + " hjerter tilbage");

    newPos1();
}

function newPos1() {
    console.log("newPos1");

    document.querySelector("#game_elements").classList.remove("hide");

    document.querySelector("#baby9").removeEventListener("click", clickBaby);
    document.querySelector("#baby10").removeEventListener("click", clickBaby);
    document.querySelector("#hest1").removeEventListener("click", clickHest);
    document.querySelector("#hest2").removeEventListener("click", clickHest);
    document.querySelector("#diamant4").removeEventListener("click", clickDiamant);
    document.querySelector("#diamant5").removeEventListener("click", clickDiamant);

    document.querySelector("#baby2").classList.remove("hide");
    document.querySelector("#baby2").classList.add("in_out2");

    document.querySelector("#baby5").classList.remove("hide");
    document.querySelector("#baby5").classList.add("in_out2");

    document.querySelector("#hest8").classList.remove("hide");
    document.querySelector("#hest8").classList.add("in_out2");

    document.querySelector("#hest4").classList.remove("hide");
    document.querySelector("#hest4").classList.add("in_out2");

    document.querySelector("#diamant1").classList.remove("hide");
    document.querySelector("#diamant1").classList.add("in_out2");

    document.querySelector("#diamant7").classList.remove("hide");
    document.querySelector("#diamant7").classList.add("in_out2");

    document.querySelector("#baby2").addEventListener("click", clickBaby);
    document.querySelector("#baby5").addEventListener("click", clickBaby);
    document.querySelector("#hest8").addEventListener("click", clickBaby);
    document.querySelector("#hest4").addEventListener("click", clickHest);
    document.querySelector("#diamant1").addEventListener("click", clickDiamant);
    document.querySelector("#diamant7").addEventListener("click", clickDiamant);
}

*/
//let liv = 3;
//
//
//function clickBomb() {
//    console.log("click bomb");
//
//
//    console.log(liv);
//
//    let heart = "#heart" + liv;
//    document.querySelector(heart).classList.add("hide");
//
//    console.log("du har " + liv + " hjerter tilbage");
//
//    // TODO: mist et liv
//
//
//
//    // også TODO: Få eksplosionen til at virke igen - det må også vente
//
//
//    liv--;
//
//}



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


/*function startGame() {
    console.log("startGame");

    document.querySelector("#baby1").classList.remove("hide");
    document.querySelector("#baby1").classList.add("in_out1");

    document.querySelector("#baby2").classList.remove("hide");
    document.querySelector("#baby2").classList.add("in_out3");

    document.querySelector("#baby3").classList.remove("hide");
    document.querySelector("#baby3").classList.add("in_out5");

    document.querySelector("#baby4").classList.remove("hide");
    document.querySelector("#baby4").classList.add("in_out2");

    document.querySelector("#baby5").classList.remove("hide");
    document.querySelector("#baby5").classList.add("in_out4");

    document.querySelector("#baby6").classList.remove("hide");
    document.querySelector("#baby6").classList.add("in_out6");

    document.querySelector("#baby7").classList.remove("hide");
    document.querySelector("#baby7").classList.add("in_out1");

    document.querySelector("#baby8").classList.remove("hide");
    document.querySelector("#baby8").classList.add("in_out3");

    document.querySelector("#baby9").classList.remove("hide");
    document.querySelector("#baby9").classList.add("in_out5");

    document.querySelector("#baby10").classList.remove("hide");
    document.querySelector("#baby10").classList.add("in_out2");

    //heste

    document.querySelector("#hest1").classList.remove("hide");
    document.querySelector("#hest1").classList.add("in_out4");

    document.querySelector("#hest2").classList.remove("hide");
    document.querySelector("#hest2").classList.add("in_out6");

    document.querySelector("#hest3").classList.remove("hide");
    document.querySelector("#hest3").classList.add("in_out1");

    document.querySelector("#hest4").classList.remove("hide");
    document.querySelector("#hest4").classList.add("in_out3");

    document.querySelector("#hest5").classList.remove("hide");
    document.querySelector("#hest5").classList.add("in_out5");

    document.querySelector("#hest6").classList.remove("hide");
    document.querySelector("#hest6").classList.add("in_out2");

    document.querySelector("#hest7").classList.remove("hide");
    document.querySelector("#hest7").classList.add("in_out4");

    document.querySelector("#hest8").classList.remove("hide");
    document.querySelector("#hest8").classList.add("in_out6");

    document.querySelector("#hest9").classList.remove("hide");
    document.querySelector("#hest9").classList.add("in_out1");

    document.querySelector("#hest10").classList.remove("hide");
    document.querySelector("#hest10").classList.add("in_out3");

    //diamanter

    document.querySelector("#diamant1").classList.remove("hide");
    document.querySelector("#diamant1").classList.add("in_out5");

    document.querySelector("#diamant2").classList.remove("hide");
    document.querySelector("#diamant2").classList.add("in_out2");

    document.querySelector("#diamant3").classList.remove("hide");
    document.querySelector("#diamant3").classList.add("in_out4");

    document.querySelector("#diamant4").classList.remove("hide");
    document.querySelector("#diamant4").classList.add("in_out6");

    document.querySelector("#diamant5").classList.remove("hide");
    document.querySelector("#diamant5").classList.add("in_out1");

    document.querySelector("#diamant6").classList.remove("hide");
    document.querySelector("#diamant6").classList.add("in_out3");

    document.querySelector("#diamant7").classList.remove("hide");
    document.querySelector("#diamant7").classList.add("in_out5");

    document.querySelector("#diamant8").classList.remove("hide");
    document.querySelector("#diamant8").classList.add("in_out2");

    document.querySelector("#diamant9").classList.remove("hide");
    document.querySelector("#diamant9").classList.add("in_out4");

    document.querySelector("#diamant10").classList.remove("hide");
    document.querySelector("#diamant10").classList.add("in_out6");

    //Eventlisteners

    document.querySelector("#baby1").addEventListener("click", clickBaby);
    document.querySelector("#baby2").addEventListener("click", clickBaby);
    document.querySelector("#baby3").addEventListener("click", clickBaby);
    document.querySelector("#baby4").addEventListener("click", clickBaby);
    document.querySelector("#baby5").addEventListener("click", clickBaby);
    document.querySelector("#baby6").addEventListener("click", clickBaby);
    document.querySelector("#baby7").addEventListener("click", clickBaby);
    document.querySelector("#baby8").addEventListener("click", clickBaby);
    document.querySelector("#baby9").addEventListener("click", clickBaby);
    document.querySelector("#baby10").addEventListener("click", clickBaby);

    document.querySelector("#hest1").addEventListener("click", clickHest);
    document.querySelector("#hest2").addEventListener("click", clickHest);
    document.querySelector("#hest3").addEventListener("click", clickHest);
    document.querySelector("#hest4").addEventListener("click", clickHest);
    document.querySelector("#hest5").addEventListener("click", clickHest);
    document.querySelector("#hest6").addEventListener("click", clickHest);
    document.querySelector("#hest7").addEventListener("click", clickHest);
    document.querySelector("#hest8").addEventListener("click", clickHest);
    document.querySelector("#hest9").addEventListener("click", clickHest);
    document.querySelector("#hest10").addEventListener("click", clickHest);

    document.querySelector("#diamant1").addEventListener("click", clickDiamant);
    document.querySelector("#diamant2").addEventListener("click", clickDiamant);
    document.querySelector("#diamant3").addEventListener("click", clickDiamant);
    document.querySelector("#diamant4").addEventListener("click", clickDiamant);
    document.querySelector("#diamant5").addEventListener("click", clickDiamant);
    document.querySelector("#diamant6").addEventListener("click", clickDiamant);
    document.querySelector("#diamant7").addEventListener("click", clickDiamant);
    document.querySelector("#diamant8").addEventListener("click", clickDiamant);
    document.querySelector("#diamant9").addEventListener("click", clickDiamant);
    document.querySelector("#diamant10").addEventListener("click", clickDiamant);
}*/
