/*********
 * nurunuru.js
*********/
document.addEventListener("DOMContentLoaded", function() {
	var testElem = document.getElementsByClassName("firable")[0];
	var firable = false;

	testElem.addEventListener("nurunuruEvent", function() {
		testElem.classList.toggle("nu-active");
	}, false);
	
	testElem.addEventListener("click", function() {
		var e = document.createEvent("UIEvents");
		e.initEvent("nurunuruEvent", true, false);
		this.dispatchEvent(e);
	}, false);

	testElem.addEventListener("touchstart", function() {
		testElem.addEventListener("touchend", function() {
			var e = document.createEvent("UIEvents");
			e.initEvent("nurunuruEvent", true, false);
			this.dispatchEvent(e);
		}, false);
	}, false);
}, false);
