// ==UserScript==
// @name         duerox admin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  run as admin
// @author       nathan
// @match        https://duerox.dustess.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dustess.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	if (sessionStorage.getItem("isSuperAdmin") == "") {
		sessionStorage.setItem("isSuperAdmin", "1");
	}
	// Your code here...
})();