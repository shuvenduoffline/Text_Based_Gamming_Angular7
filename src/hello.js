import {
    Environment
} from './environment.js';
import {
    options
} from './addtions.js';

import {onChange} from './fileprosessing.js';

const defultline = "Start Your Journey now!!";
const BR = "<br/>";
var evListner;
var x = 0,
    y = 0;

var fileinput;
evListner = () => {
    let a = document.querySelector("#massage");
    command(a.value);
    a.value = "";
}





var enviroment = new Environment("Forest - ");
var treasures = new WeakMap();
var tresCords = new Set();



function command(massage) {
    if (massage == "left") {
        addmassaage(enviroment.stumbleUpon());
        navigate(-1, 0);
    } else if (massage == "right") {
        addmassaage(enviroment.stumbleUpon());
        navigate(1, 0);
    } else if (massage == "up") {
        addmassaage(enviroment.stumbleUpon());
        navigate(0, -1);
    } else if (massage == "down") {
        addmassaage(enviroment.stumbleUpon());
        navigate(0, 1);
    } else if (massage == "help") {
        addmassaage(options.outputOptions());
    } else if (massage == "poke") {
        addmassaage(enviroment.poke());
    } else {
        addmassaage(massage);
    }
}

function main() {
    let send = document.querySelector("#send");
    send.addEventListener("click", evListner, false);
    addmassaage();

    var coordinate1 = {
        x: 2,
        y: 2
    };
    tresCords.add(coordinate1);
    treasures.set(coordinate1, {
        name: "treasure chest",
        value: 100
    });


    var coordinate2 = {
        x: 2,
        y: 0
    };
    tresCords.add(coordinate2);
    treasures.set(coordinate2, {
        name: "medilion",
        value: 10
    });


    fileinput = document.querySelector("#file");
    fileinput.onchange = function () {
        onChange(fileinput.files,tresCords,treasures);
    };

}





function navigate(stepX, stepY) {
    [x, y] = [x + stepX, y + stepY];
    var coordinate = document.querySelector("#coordinate");
    coordinate.innerHTML = `${x} , ${y}`;
    findtreasure();
}

function findtreasure() {
    var findCords;
    tresCords.forEach(cords => {
        if (cords.x == x && cords.y == y) {
            findCords = cords;
        }
    })


    if (findCords) {
        var {
            name,
            value
        } = treasures.get(findCords);
        if (value) {
            addmassaage(`You found ${name} (${value})`);
        }
    }
}

function addmassaage(massage = defultline) {
    let answer = document.querySelector("#massage-box");
    answer.innerHTML = answer.innerHTML + BR + massage;
}

main();