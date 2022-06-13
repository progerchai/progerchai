"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es7.array.includes.js");

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var fn = function fn() {
  console.log(12345);
};

new _promise["default"](function () {});
var Test = /*#__PURE__*/(0, _createClass2["default"])(function Test() {
  (0, _classCallCheck2["default"])(this, Test);
});
var b = [1, 2, 3].includes(1);
