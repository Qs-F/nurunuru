/*********
 * nurunuru.js
*********/
document.addEventListener("DOMContentLoaded", function() {
	var testElem = document.getElementsByClassName("firable")[0];
	var firable = false;
	var hasTapEvent = (function(){
		var div = document.createElement('div');
		div.setAttribute('ontouchstart', 'return');
		return (typeof div.ontouchstart === 'function');
	})();
	testElem.addEventListener("nurunuruEvent", function() {
		testElem.classList.toggle("nu-active");
	}, false);
	if(hasTapEvent == false) {
		testElem.addEventListener("click", function() {
			var e = document.createEvent("UIEvents");
			e.initEvent("nurunuruEvent", true, false);
			this.dispatchEvent(e);
		}, false);
	} else {
		testElem.addEventListener("touchstart", function() {
			testElem.addEventListener("touchend", function() {
				var e = document.createEvent("UIEvents");
				e.initEvent("nurunuruEvent", true, false);
				this.dispatchEvent(e);
			}, false);
		}, false);
	}
}, false);
