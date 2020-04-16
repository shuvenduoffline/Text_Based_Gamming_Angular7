import "babel-core/register";
import "babel-polyfill";

export class Encounter {
    constructor(intro = "Hurrah!! You encounter a unicorn! You can fly to your dream destination!!") {
        this.introText = intro;
    }
    whenEncounter() {
        return this.introText;
    }
    * poke() {
        yield "what's up!!";
    }
}


export class Bear extends Encounter {
    constructor() {
        super("grr grow, you encounter a bear!!");
    }

    * poke() {
        yield "Grrr...";
        yield "Bear is agressive..";
        yield "Bear is attacking you !! What out.."
    }
}

export class Angel extends Encounter {
    constructor() {
        super("Wow!! You encounter a Angel!! It will give you strength and healing power!!");
    }
}

export class Ghost extends Encounter {
    constructor() {
        super("Booh!!, You encounter a Ghost!!");
    }
}

export function generate() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;

    if (number == 1) {
        return new Ghost();
    } else if (number == 2) {
        return new Angel();
    } else if (number == 3) {
        return new Bear();
    } else if (number == 4) {
        return new Encounter();
    }
}