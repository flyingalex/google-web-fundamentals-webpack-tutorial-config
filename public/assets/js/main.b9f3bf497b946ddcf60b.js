webpackJsonp([2],{

/***/ "6wsf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/one_piece.png";

/***/ }),

/***/ "Lp72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("O27J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_comments__ = __webpack_require__("pcAk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_comments___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_comments__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_flag_png__ = __webpack_require__("wYSn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_flag_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_flag_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_one_piece_png__ = __webpack_require__("6wsf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_one_piece_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_one_piece_png__);






__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "w+cB")).then(comments => {
  comments.render();
});

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'flag', src: __WEBPACK_IMPORTED_MODULE_3__images_flag_png___default.a }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'comment' },
    'hello world'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'one-piece', src: __WEBPACK_IMPORTED_MODULE_4__images_one_piece_png___default.a })
), document.getElementById('app'));

/***/ }),

/***/ "NPrr":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".comment{background:#000;color:#fff}", ""]);

// exports


/***/ }),

/***/ "pcAk":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("NPrr");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("MTIv")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./comments.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!./comments.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "wYSn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAtFBMVEVHcEzcNS3dNS2xKCK7OThCSV/AOitBSl/AOiu/Oiq/OStBSWBCSWC/Nyf/AADAOSvAOirBOyvEOie/OSvANyu/OCr/AACjJiLAOSq/Oiy/Ni3TMiuzKyOyKSLAOSu/OSu/OSvAOiq/OSu/Pz++OinBPSi/OSq/OivAOim+OCnAOSuEGhrAOSrGOCq1MCPLNyzaNi3fNy+aPUKyOjvAOivdNS6wJyG+OCq3LSW5LCauKiK6KiYAY1bpAAAANHRSTlMA4Jj7wmjkqOAw8oFFIAGawGMNWCnxAkP7NByr5/rl5rZygARPGajtSuP3MMwSZEUcIJ23+p11CQAAAJtJREFUOMvt01cOwkAMRVHDUEPvvZNCb0MYYP/7oggpNolsFsD9Pl/WM0AuD3zppAROsaB9FEicgw4S2GVp3W+Q0qR2RwBT4MF6xoNlHXgwAR6UizywCsCDCvDAqgpAlySgvSgwRGC0+YBj/FXvfjXGNPAdHDKY1c1/diGnrmHQ8sPAtRFoDsJAj/Emt32l1CJDm/802j94J7z/A2h0UtEfXvcBAAAAAElFTkSuQmCC"

/***/ })

},["Lp72"]);