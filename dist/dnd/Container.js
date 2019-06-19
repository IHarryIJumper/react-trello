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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _smoothDnd = _interopRequireWildcard(require("smooth-dnd"));

_smoothDnd.default.dropHandler = _smoothDnd.dropHandlers.reactDropHandler().handler;

_smoothDnd.default.wrapChild = function (p) {
  return p;
}; // dont wrap children they will already be wrapped


var Container =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Container, _Component);

  function Container(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Container);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).call(this, props));
    _this.getContainerOptions = _this.getContainerOptions.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.setRef = _this.setRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.prevContainer = null;
    return _this;
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);
      this.prevContainer = this.containerDiv;
      this.container = (0, _smoothDnd.default)(this.containerDiv, this.getContainerOptions());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.dispose();
      this.container = null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);

      if (this.containerDiv) {
        if (this.prevContainer && this.prevContainer !== this.containerDiv) {
          this.container.dispose();
          this.container = (0, _smoothDnd.default)(this.containerDiv, this.getContainerOptions());
          this.prevContainer = this.containerDiv;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.render) {
        return this.props.render(this.setRef);
      } else {
        return _react.default.createElement("div", {
          style: this.props.style,
          ref: this.setRef
        }, this.props.children);
      }
    }
  }, {
    key: "setRef",
    value: function setRef(element) {
      this.containerDiv = element;
    }
  }, {
    key: "getContainerOptions",
    value: function getContainerOptions() {
      var _this2 = this;

      var functionProps = {};

      if (this.props.onDragStart) {
        functionProps.onDragStart = function () {
          var _this2$props;

          return (_this2$props = _this2.props).onDragStart.apply(_this2$props, arguments);
        };
      }

      if (this.props.onDragEnd) {
        functionProps.onDragEnd = function () {
          var _this2$props2;

          return (_this2$props2 = _this2.props).onDragEnd.apply(_this2$props2, arguments);
        };
      }

      if (this.props.onDrop) {
        functionProps.onDrop = function () {
          var _this2$props3;

          return (_this2$props3 = _this2.props).onDrop.apply(_this2$props3, arguments);
        };
      }

      if (this.props.getChildPayload) {
        functionProps.getChildPayload = function () {
          var _this2$props4;

          return (_this2$props4 = _this2.props).getChildPayload.apply(_this2$props4, arguments);
        };
      }

      if (this.props.shouldAnimateDrop) {
        functionProps.shouldAnimateDrop = function () {
          var _this2$props5;

          return (_this2$props5 = _this2.props).shouldAnimateDrop.apply(_this2$props5, arguments);
        };
      }

      if (this.props.shouldAcceptDrop) {
        functionProps.shouldAcceptDrop = function () {
          var _this2$props6;

          return (_this2$props6 = _this2.props).shouldAcceptDrop.apply(_this2$props6, arguments);
        };
      }

      if (this.props.onDragEnter) {
        functionProps.onDragEnter = function () {
          var _this2$props7;

          return (_this2$props7 = _this2.props).onDragEnter.apply(_this2$props7, arguments);
        };
      }

      if (this.props.onDragLeave) {
        functionProps.onDragLeave = function () {
          var _this2$props8;

          return (_this2$props8 = _this2.props).onDragLeave.apply(_this2$props8, arguments);
        };
      }

      if (this.props.render) {
        functionProps.render = function () {
          var _this2$props9;

          return (_this2$props9 = _this2.props).render.apply(_this2$props9, arguments);
        };
      }

      if (this.props.onDropReady) {
        functionProps.onDropReady = function () {
          var _this2$props10;

          return (_this2$props10 = _this2.props).onDropReady.apply(_this2$props10, arguments);
        };
      }

      if (this.props.getGhostParent) {
        functionProps.getGhostParent = function () {
          var _this2$props11;

          return (_this2$props11 = _this2.props).getGhostParent.apply(_this2$props11, arguments);
        };
      }

      return Object.assign({}, this.props, functionProps);
    }
  }]);
  return Container;
}(_react.Component);

Container.propTypes = {
  behaviour: _propTypes.default.oneOf(["move", "copy", "drag-zone"]),
  groupName: _propTypes.default.string,
  orientation: _propTypes.default.oneOf(["horizontal", "vertical"]),
  style: _propTypes.default.object,
  dragHandleSelector: _propTypes.default.string,
  className: _propTypes.default.string,
  nonDragAreaSelector: _propTypes.default.string,
  dragBeginDelay: _propTypes.default.number,
  animationDuration: _propTypes.default.number,
  autoScrollEnabled: _propTypes.default.string,
  lockAxis: _propTypes.default.string,
  dragClass: _propTypes.default.string,
  dropClass: _propTypes.default.string,
  onDragStart: _propTypes.default.func,
  onDragEnd: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  getChildPayload: _propTypes.default.func,
  shouldAnimateDrop: _propTypes.default.func,
  shouldAcceptDrop: _propTypes.default.func,
  onDragEnter: _propTypes.default.func,
  onDragLeave: _propTypes.default.func,
  render: _propTypes.default.func,
  getGhostParent: _propTypes.default.func,
  removeOnDropOut: _propTypes.default.bool
};
Container.defaultProps = {
  behaviour: 'move',
  orientation: 'vertical',
  className: 'reactTrelloBoard'
};
var _default = Container;
exports.default = _default;