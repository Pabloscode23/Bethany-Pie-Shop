'use strict';
function setLocalStorage() {
    let data = document.getElementById("localData").value;
    localStorage.setItem("myLocalData", data);

    document.getElementById("localData").value = "";
    let addData = ['Cheese cake', 'Apple pie', 'Cranberry pie', 'Cherry pie', 'Peach pie', 'Pumpkin pie', 'Christmas apple pie', 'Blueberry cheese cake', 'Rhubarb pie', 'Strawberry pie', 'Strawberry cheese cake']
    for (let i = 0; i < addData.length; i++) {
        localStorage.setItem("Pie " + (i + 1), addData[i]);
    }
}

function setSessionStorage() {
    let data = document.getElementById("sessionData").value;
    sessionStorage.setItem("mySessionData", data);

    document.getElementById("sessionData").value = "";
    let addData = ['Cherry', 'Chocolate', 'Vanilla']
    for (let i = 0; i < addData.length; i++) {
        sessionStorage.setItem("Topings: " + (i + 1), addData[i]);
    }
}



function getLocalStorage() {
    document.getElementById("localStorageValue").textContent = localStorage.getItem("myLocalData");
}

function getSessionStorage() {
    document.getElementById("sessionStorageValue").textContent = sessionStorage.getItem("mySessionData");
}



function loopThroughLocalStorage() {
    let dataHtml = "";

    for (let i = 0; i < localStorage.length; i++) {
        dataHtml += "<p>" + localStorage.getItem(localStorage.key(i)) + "</p>";
    }

    document.getElementById("localStorageAllData").innerHTML = dataHtml;
}

function loopThroughSessionStorage() {
    let dataHtml = "";

    for (let i = 0; i < sessionStorage.length; i++) {
        dataHtml += "<p>" + sessionStorage.getItem(sessionStorage.key(i)) + "</p>";
    }

    document.getElementById("sessionStorageAllData").innerHTML = dataHtml;
}



function removeLocalStorage() {
    localStorage.removeItem("myLocalData");

    getLocalStorage();
    loopThroughLocalStorage();
}

function removeSessionStorage() {
    sessionStorage.removeItem("mySessionData");

    getSessionStorage();
    loopThroughSessionStorage();
}



function clearLocalStorage() {
    localStorage.clear();

    getLocalStorage();
    loopThroughLocalStorage();
}

function clearSessionStorage() {
    sessionStorage.clear();

    getSessionStorage();
    loopThroughSessionStorage();
}
