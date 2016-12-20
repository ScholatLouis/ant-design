webpackJsonp([141,204],{

/***/ 858:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "To display the current progress of an operation flow."], ["h2", "When To Use"], ["p", "If it will take a long time to complete the operation, you can use ", ["code", "Progress"], " to show the current progress and status."], ["ul", ["li", ["p", "When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds."]], ["li", ["p", "When you need to display the completion percentage of an operation."]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Feedback",
	    "title": "Progress",
	    "filename": "components/progress/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "type"], ["td", "to set the type, options: ", ["code", "line"], " ", ["code", "circle"]], ["td", "String"], ["td", "line"]], ["tr", ["td", "percent"], ["td", "to set the completion percentage"], ["td", "Number"], ["td", "0"]], ["tr", ["td", "format"], ["td", "template function of the content"], ["td", "function(percent)"], ["td", ["code", "percent => percent + '%'"]]], ["tr", ["td", "status"], ["td", "to set the status of the progress, options: ", ["code", "success"], " ", ["code", "exception"], " ", ["code", "active"]], ["td", "String"], ["td", "-"]], ["tr", ["td", "showInfo"], ["td", "determine whether to display the progress value and the status icon"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "strokeWidth ", ["code", "(type=line)"]], ["td", "to set the width of the progress bar, unit: ", ["code", "px"]], ["td", "Number"], ["td", "10"]], ["tr", ["td", "strokeWidth ", ["code", "(type=circle)"]], ["td", "to set the width of the circular progress bar, unit: percentage of the canvas width"], ["td", "Number"], ["td", "6"]], ["tr", ["td", "width ", ["code", "(type=circle)"]], ["td", "to set the canvas width of the circular progress bar, unit: ", ["code", "px"]], ["td", "Number"], ["td", "132"]]]]]
	};

/***/ }

});