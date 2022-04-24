// function swap(cssFile) {
//     let link = document.getElementById("change-style")
//     link.href = cssFile;
// }



let square = document.querySelector("#square");

square.onclick = function swap(cssFile) {
    if (window.matchMedia("(max-width: 767px)").matches){
        let link = document.getElementById("change-style");
        link.href = ('css/littlesquare.css');
    }
    else {
        let link = document.getElementById("change-style");
        link.href = ('css/square.css');
    }
}


let cat = document.querySelector("#cat");

cat.onclick = function swap(cssFile) {
    if (window.matchMedia("(max-width: 767px)").matches){
        let link = document.getElementById("change-style");
        link.href = ('css/littlecat.css');
    }
    else {
        let link = document.getElementById("change-style");
        link.href = ('css/cat.css');
    }
}


let bear = document.querySelector("#bear");

bear.onclick = function swap(cssFile) {
    if (window.matchMedia("(max-width: 767px)").matches){
        let link = document.getElementById("change-style");
        link.href = ('css/littlebear.css');
    }
    else {
        let link = document.getElementById("change-style");
        link.href = ('css/bear.css');
    }
}


let fish = document.querySelector("#fish");

fish.onclick = function swap(cssFile) {
    if (window.matchMedia("(max-width: 767px)").matches){
        let link = document.getElementById("change-style");
        link.href = ('css/littlefish.css');
    }
    else {
        let link = document.getElementById("change-style");
        link.href = ('css/fish.css');
    }
}
let goose = document.querySelector("#goose");

goose.onclick = function swap(cssFile) {
    if (window.matchMedia("(max-width: 767px)").matches){
        let link = document.getElementById("change-style");
        link.href = ('css/littlegoose.css');
    }
    else {
        let link = document.getElementById("change-style");
        link.href = ('css/goose.css');
    }
}

