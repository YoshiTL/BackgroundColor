// ==UserScript==
//
// @name           Teamliquid - Changes BackgroundColor
// @description    Changes BackgroundColor
// @namespace      Yoshi-
// @author         Yoshi-
// @version        0.1
// @include        http://www.teamliquid.net/*
// @run-at         document-end
//
// ==/UserScript==


document.getElementsByClassName('top_menu left')[0].innerHTML+="<div><a href='#' id='colorsetting'>Color Setting</a></div>";

function setColor() {
    GM_setValue('color', prompt('Color?', GM_getValue('color')));
}

function changeBG() {
	document.body.style.backgroundColor = GM_getValue('color');
}

if(GM_getValue('color') == undefined) {
    setColor();
} else {
	
}


ps = document.getElementById('colorsetting');
ps.addEventListener('click', setColor, false);