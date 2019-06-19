"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var _EditableLabel = _interopRequireDefault(require("./widgets/EditableLabel"));

var _Elements = require("../styles/Elements");

var NewCard =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NewCard, _Component);

  function NewCard() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NewCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NewCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateField", function (field, value) {
      _this.setState((0, _defineProperty2.default)({}, field, value));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleAdd", function () {
      _this.props.onAdd(_this.state);
    });
    return _this;
  }

  (0, _createClass2.default)(NewCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var onCancel = this.props.onCancel;
      return _react.default.createElement("div", {
        style: {
          background: '#E3E3E3'
        }
      }, _react.default.createElement(_Base.CardWrapper, null, _react.default.createElement(_Base.CardHeader, null, _react.default.createElement(_Base.CardTitle, null, _react.default.createElement(_EditableLabel.default, {
        placeholder: "title",
        onChange: function onChange(val) {
          return _this2.updateField('title', val);
        },
        autoFocus: true
      })), _react.default.createElement(_Base.CardRightContent, null, _react.default.createElement(_EditableLabel.default, {
        placeholder: "label",
        onChange: function onChange(val) {
          return _this2.updateField('label', val);
        }
      }))), _react.default.createElement(_Base.Detail, null, _react.default.createElement(_EditableLabel.default, {
        placeholder: "description",
        onChange: function onChange(val) {
          return _this2.updateField('description', val);
        }
      }))), _react.default.createElement(_Elements.AddButton, {
        onClick: this.handleAdd
      }, "Add"), _react.default.createElement(_Elements.CancelButton, {
        onClick: onCancel
      }, "Cancel"));
    }
  }]);
  return NewCard;
}(_react.Component);

NewCard.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func.isRequired
};
NewCard.defaultProps = {};
var _default = NewCard;
exports.default = _default;