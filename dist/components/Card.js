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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var _Tag = _interopRequireDefault(require("./Tag"));

var _DeleteButton = _interopRequireDefault(require("./widgets/DeleteButton"));

var _classnames = _interopRequireDefault(require("classnames"));

var Card =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Card, _Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "removeCard", function (e) {
      var _this$props = _this.props,
          id = _this$props.id,
          laneId = _this$props.laneId,
          removeCard = _this$props.removeCard,
          onDelete = _this$props.onDelete;
      removeCard(laneId, id);
      onDelete(id, laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderBody", function () {
      if (_this.props.customCardLayout) {
        var _this$props2 = _this.props,
            customCard = _this$props2.customCard,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props2, ["customCard"]);
        return _react.default.cloneElement(customCard, (0, _objectSpread2.default)({}, otherProps));
      } else {
        var _this$props3 = _this.props,
            title = _this$props3.title,
            description = _this$props3.description,
            label = _this$props3.label,
            tags = _this$props3.tags;
        return _react.default.createElement("span", null, _react.default.createElement(_Base.CardHeader, null, _react.default.createElement(_Base.CardTitle, null, title), _react.default.createElement(_Base.CardRightContent, null, label)), _react.default.createElement(_Base.Detail, null, description), tags && _react.default.createElement(_Base.Footer, null, tags.map(function (tag) {
          return _react.default.createElement(_Tag.default, (0, _extends2.default)({
            key: tag.title
          }, tag, {
            tagStyle: _this.props.tagStyle
          }));
        })));
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Card, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          cardStyle = _this$props4.cardStyle,
          editable = _this$props4.editable,
          hideCardDeleteIcon = _this$props4.hideCardDeleteIcon,
          customCardLayout = _this$props4.customCardLayout,
          dragStyle = _this$props4.dragStyle,
          onDelete = _this$props4.onDelete,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props4, ["id", "cardStyle", "editable", "hideCardDeleteIcon", "customCardLayout", "dragStyle", "onDelete"]);
      var style = customCardLayout ? (0, _objectSpread2.default)({}, cardStyle, {
        padding: 0
      }) : cardStyle;
      var allClassNames = (0, _classnames.default)('react-trello-card', this.props.className || '');
      return _react.default.createElement(_Base.MovableCardWrapper, (0, _extends2.default)({
        className: allClassNames,
        key: id,
        "data-id": id,
        style: (0, _objectSpread2.default)({}, style, dragStyle)
      }, otherProps), this.renderBody(), editable && !hideCardDeleteIcon && _react.default.createElement(_DeleteButton.default, {
        onClick: this.removeCard
      }));
    }
  }]);
  return Card;
}(_react.Component);

Card.defaultProps = {
  cardStyle: {},
  customCardLayout: false,
  onDelete: function onDelete() {},
  editable: false,
  dragStyle: {}
};
Card.propTypes = {
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  index: _propTypes.default.number,
  description: _propTypes.default.string,
  label: _propTypes.default.string,
  tags: _propTypes.default.array,
  laneId: _propTypes.default.string.isRequired,
  removeCard: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  metadata: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  dragStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  customCardLayout: _propTypes.default.bool,
  customCard: _propTypes.default.node,
  editable: _propTypes.default.bool
};
var _default = Card;
exports.default = _default;