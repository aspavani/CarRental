"use strict";

window.onload = init;

function init() {
    let costbtn = document.getElementById("TCostbtn");
    costbtn.onclick = onTCostbtnClicked;
}

function onTCostbtnClicked() {
    let tc = 0;
    let numdays_ele = document.getElementById("numdays");
    let numdays = Number(numdays_ele.value);

    let bcr = numdays * 29.99;
    let options_cost = 0;

    let ett_ele = document.getElementById("tollTagChkbox");
    if (ett_ele.checked) {
        options_cost = options_cost + numdays * 3.95;
    }

    let gps_ele = document.getElementById("gpsChkbox");
    if (gps_ele.checked) {
        options_cost = options_cost + Number(numdays) * 4.95;
    }
    let rsa_ele = document.getElementById("roadSideChkbox");
    if (rsa_ele.checked) {
        options_cost = options_cost + Number(numdays) * 2.95;
    }

    let surcharge = 0;
    let yage_ele = document.getElementById("yage");
    if (yage_ele.checked) {
        surcharge = bcr * 0.3;
    }
    let nage_ele = document.getElementById("nage");
    if (nage_ele.checked) {
        surcharge = 0;
    }

    tc = bcr + options_cost + surcharge;

    let pmsg = " ";
    pmsg = `Car rental: $ ${bcr}` + `<br>` +
        `Options: $ ${options_cost}` + `<br>` +
        `Under 25 Surcharge: $ ${surcharge}` + `<br>` + `<br>`+
        `Total due: $ ${tc.toFixed(2)}`;
    let p_ele = document.createElement("p");
    p_ele.innerHTML = pmsg;
    p_ele.style.textAlign = "center";

    let fs_ele = document.getElementById("fs");
    fs_ele.appendChild(p_ele);

}