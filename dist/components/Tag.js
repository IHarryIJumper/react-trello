"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var Tag =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Tag, _Component);

  function Tag() {
    (0, _classCallCheck2.default)(this, Tag);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tag).apply(this, arguments));
  }

  (0, _createClass2.default)(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          color = _this$props.color,
          bgcolor = _this$props.bgcolor,
          tagStyle = _this$props.tagStyle,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["title", "color", "bgcolor", "tagStyle"]);
      var style = (0, _objectSpread2.default)({
        color: color || 'white',
        backgroundColor: bgcolor || 'orange'
      }, tagStyle);
      return _react.default.createElement(_Base.TagSpan, (0, _extends2.default)({
        style: style
      }, otherProps), title);
    }
  }]);
  return Tag;
}(_react.Component);

Tag.propTypes = {
  title: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  bgcolor: _propTypes.default.string,
  tagStyle: _propTypes.default.object
};
var _default = Tag;
exports.default = _default;