// ==UserScript==
// @name         Youtube Adblocker
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Basic and small Youtube AdBlocker
// @author       kigipux
// @match        https://www.youtube.com/*
// @icon         https://kigi.moe/assets/mmc/favicons/favicon-32x32.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const createNodeFromHTML = function(htmlcode){
        var s = document.createElement("template");
        s.innerHTML = htmlcode;
        return s.content.firstChild;
    }
    const watermark = createNodeFromHTML('<div id="kigipux-adblock" owner="kigipux" style="color:white;font-size:11px;position:relative;"><span style="display:inline-flex;align-items:center;position:absolute;right:0;">Youtube Adblock, by <a href="https://kigi.moe/" target="_blank" style="color:white;display:inline-flex;align-items:center;margin-left:5px;"><img alt="KIGIPUX" src="https://kigi.moe/assets/mmc/favicons/favicon-16x16.png"></a></span></div>');
    const createWatermark = function(){
        var elem = document.getElementById("kigipux-adblock");
        if (!elem) document.getElementById("ytd-player").appendChild(watermark);
    }
    setInterval(function(){
        const ad = [...document.querySelectorAll('.ad-showing')][0]; if (ad) {
            document.querySelector('video').playbackRate = 10;
            const btn = document.querySelector('.videoAdUiSkipButton,.ytp-ad-skip-button');
            if (btn) {btn.click();}
        }
    }, 150);
    setInterval(createWatermark,1000);
})();
