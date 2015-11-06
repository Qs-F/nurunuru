// /*********
// * nurunuru.js
// *********/
// document.addEventListener("DOMContentLoaded", function() {
// 	var testElem = document.getElementsByClassName("firable")[0];
// 	var firable = false;
// 	var hasTapEvent = (function(){
// 		var div = document.createElement('div');
// 		div.setAttribute('ontouchstart', 'return');
		// return (typeof div.ontouchstart === 'function');
// 	})();
// 	testElem.addEventListener("nurunuruEvent", function() {
// 		testElem.classList.toggle("nu-active");
// 	}, false);
// 	if(hasTapEvent === false) {
// 		testElem.addEventListener("click", function() {
// 			var e = document.createEvent("UIEvents");
// 			e.initEvent("nurunuruEvent", true, false);
// 			this.dispatchEvent(e);
// 		}, false);
// 	} else {
// 		testElem.addEventListener("touchstart", function() {
// 			testElem.addEventListener("touchend", function() {
// 				var e = document.createEvent("UIEvents");
// 				e.initEvent("nurunuruEvent", true, false);
// 				this.dispatchEvent(e);
// 			}, false);
// 		}, false);
// 	}
// }, false);

// state = 'off';

document.addEventListener('DOMContentLoaded', function() {
  var state = 'off';
  var elem = document.getElementsByClassName('firable')[0];
  var hasTapEvent = (function() {
    var div = document.createElement('div');
    div.setAttribute('ontouchstart', 'return');
    return(typeof div.ontouchstart === 'function');
  })();
  if(hasTapEvent === true) {
    // support touch event
    elem.addEventListener('touchstart', function() {
      state = 'on';
    }, false);
    elem.addEventListener('touchend', function() {
      state = 'off';
    }, false);
  } else {
    // NOT support touch event
    elem.addEventListener('mousedown', function() {
      state = 'on';
    }, false);
    elem.addEventListener('mouseup', function() {
      state = 'off';
    }, false);
  }
}, false);