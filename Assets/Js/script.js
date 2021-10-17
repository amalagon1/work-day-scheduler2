
window.onload = function () {
    hour9()
    hour10()
    hour11()
    hour12()
    hour13()
    hour14()
    hour15()
    hour16()
    hour17()
}

//handle time
const date = new Date();
const currentHour = date.getHours();
$("#currentDay").text(date.toLocaleDateString());
$("#hour" + currentHour).addClass("current");




//local storage





//event handling
function hour9() {
    let content = document.querySelector("#text9");
    $("#btn9").click(function () {
        const value = content.value;
        localStorage.setItem("hour9", value);

    });

};
function hour10() {
    let content = document.querySelector("#text10");
    $("#btn10").click(function () {
        const value = content.value;
        localStorage.setItem("hour10", value);
    });

};

function hour11() {
    let content = document.querySelector("#text11");
    $("#btn11").click(function () {
        const value = content.value;
        localStorage.setItem("hour11", value);
    });

};

function hour12() {
    let content = document.querySelector("#text12");
    $("#btn12").click(function () {
        const value = content.value;
        localStorage.setItem("hour12", value);
    });

};

function hour13() {
    let content = document.querySelector("#text13");
    $("#btn13").click(function () {
        const value = content.value;
        localStorage.setItem("hour13", value);
    });

};

function hour14() {
    let content = document.querySelector("#text14");
    $("#btn14").click(function () {
        const value = content.value;
        localStorage.setItem("hour14", value);
    });

};

function hour15() {
    let content = document.querySelector("#text15");
    $("#btn15").click(function () {
        const value = content.value;
        localStorage.setItem("hour15", value);
    });

};

function hour16() {
    let content = document.querySelector("#text16");
    $("#btn16").click(function () {
        const value = content.value;
        localStorage.setItem("hour16", value);
    });

};

function hour17() {
    let content = document.querySelector("#text17");
    $("#btn17").click(function () {
        const value = content.value;
        localStorage.setItem("hour17", value);
    });

};