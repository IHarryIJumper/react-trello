"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var EditableLabel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EditableLabel, _React$Component);

  function EditableLabel() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, EditableLabel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EditableLabel)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      text: ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getText", function (el) {
      return el.innerText;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onTextChange", function (ev) {
      var text = _this.getText(ev.target);

      _this.setState({
        text: text
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onBlur", function () {
      _this.props.onChange(_this.state.text);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onPaste", function (ev) {
      ev.preventDefault();
      var text = ev.clipboardData.getData('text');
      document.execCommand('insertText', false, text);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getClassName", function () {
      var placeholder = _this.state.text === '' ? 'comPlainTextContentEditable--has-placeholder' : '';
      return "comPlainTextContentEditable ".concat(placeholder);
    });
    return _this;
  }

  (0, _createClass2.default)(EditableLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.refDiv.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        ref: function ref(_ref) {
          return _this2.refDiv = _ref;
        },
        contentEditable: "true",
        className: this.getClassName(),
        onPaste: this.onPaste,
        onBlur: this.onBlur,
        onInput: this.onTextChange,
        placeholder: this.props.placeholder
      });
    }
  }]);
  return EditableLabel;
}(_react.default.Component);

EditableLabel.defaultProps = {
  onChange: function onChange() {},
  placeholder: '',
  autoFocus: false
};
EditableLabel.propTypes = {
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  autoFocus: _propTypes.default.bool
};
var _default = EditableLabel;
exports.default = _default;