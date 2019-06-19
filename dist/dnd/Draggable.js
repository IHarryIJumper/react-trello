"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _smoothDnd = require("smooth-dnd");

var wrapperClass = _smoothDnd.constants.wrapperClass;

var Draggable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Draggable, _Component);

  function Draggable() {
    (0, _classCallCheck2.default)(this, Draggable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Draggable).apply(this, arguments));
  }

  (0, _createClass2.default)(Draggable, [{
    key: "render",
    value: function render() {
      if (this.props.render) {
        return _react.default.cloneElement(this.props.render(), {
          className: wrapperClass
        });
      }

      var clsName = "".concat(this.props.className ? this.props.className + ' ' : '');
      return _react.default.createElement("div", (0, _extends2.default)({}, this.props, {
        className: "".concat(clsName).concat(wrapperClass)
      }), this.props.children);
    }
  }]);
  return Draggable;
}(_react.Component);

Draggable.propTypes = {
  render: _propTypes.default.func
};
var _default = Draggable;
exports.default = _default;