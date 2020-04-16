import * as encounter from './encounter.js';
export class Environment {
    constructor(name) {
        this.name = name;
        this.encounter = encounter.generate();
    }
    stumbleUpon() {
        this.encounter = encounter.generate();
        this.pockcounter = this.encounter.poke();
        var interaction = this.name + " You just stumbled upon..." + this.encounter.whenEncounter();
        return interaction;
    }

    poke(){
        var pokereturn = this.pockcounter.next();

        if(!pokereturn.done){
            return pokereturn.value;
        }
    }
}