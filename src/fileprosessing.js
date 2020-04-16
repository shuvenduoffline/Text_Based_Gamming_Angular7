import "babel-core/register";
import "babel-polyfill";

export async function onChange(files, tresCords, treasures) {
    try {
        var results = await _onfileselected(files);
        results.forEach((result) => {
            result.forEach((res) => {
                console.log(res);
                console.log(res["coordinates"]);
                console.log(res["treasures"]);
                tresCords.add(res["coordinates"]);
                treasures.set(res["coordinates"], res["treasures"]);
            })
        });
    } catch (e) {
        console.log("File reading error : ", e);
    }

}

function _onfileselected(files) {
    var arr_promiss = [];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        arr_promiss.push(pFileReader(file));
    }
    return Promise.all(arr_promiss);
}

function pFileReader(file) {
    var reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = function (ent) {
            if (ent.target.readyState == FileReader.DONE) {
                resolve(JSON.parse(ent.target.result));
            }
        };

        if (file) {
            reader.readAsText(file, "UTF-8");
        }
    });
}