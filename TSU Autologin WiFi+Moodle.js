// ==UserScript==
// @name         TSU Autologin WiFi+Moodle
// @namespace    http://tampermonkey.net/
// @version      24.10.09
// @description  It does what it says?
// @author       ac-stu@yandex.ru
// @match        https://lms.tsu.ru/*
// @match        https://accounts.tsu.ru/*
// @match        https://wifi.tsu.ru:8001/*
// @icon         none
// @grant        GM_log
// ==/UserScript==
function clickByClass(className){
    const eek = document.getElementsByClassName(className)[0];
    if (eek !== undefined){
        const evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        eek.dispatchEvent(evt);
    }
}
(function() {
    'use strict';
    console.log("LMS (moodle) autoauth enabled!");
    const cUrl = window.location.href;
    console.log(cUrl);
    if(cUrl == "https://lms.tsu.ru/login/index.php"){
        clickByClass("aclogin");
    } else if(cUrl.startsWith("https://lms.tsu.ru/")){
        clickByClass("btn-login");
    } else if(cUrl.startsWith("https://accounts.tsu.ru/Account/Choose2?applicationId=")){
        clickByClass("btn-primary");
    } else if(cUrl.startsWith("https://wifi.tsu.ru:8001/")){
        clickByClass("btn-lg");
    }
})();