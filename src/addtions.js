// @flow
export const INPUT_OPTION = Symbol("input_options");
export var options = {
    _intro: "You can type ",
    [INPUT_OPTION]: ["left", "right", "up", "down","poke", "help"],
    outputOptions() {
        var x = "";
        this[INPUT_OPTION].forEach(element => {
            x += (this._intro + " " + element + "<br/>");
        });
        return x;
    }
}