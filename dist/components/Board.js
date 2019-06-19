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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _BoardContainer = _interopRequireDefault(require("./BoardContainer"));

var _reactRedux = require("react-redux");

var _classnames = _interopRequireDefault(require("classnames"));

var _redux = require("redux");

var _BoardReducer = _interopRequireDefault(require("../reducers/BoardReducer"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _Base = require("../styles/Base");

var middlewares = process.env.REDUX_LOGGING ? [_reduxLogger.default] : [];

var Board =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Board, _Component);

  function Board() {
    var _this;

    (0, _classCallCheck2.default)(this, Board);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Board).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getStore", function () {
      //When you create multiple boards, unique stores are created for isolation
      return (0, _redux.createStore)(_BoardReducer.default, _redux.applyMiddleware.apply(void 0, middlewares));
    });
    _this.store = _this.getStore();
    _this.id = (0, _v.default)();
    return _this;
  }

  (0, _createClass2.default)(Board, [{
    key: "render",
    value: function render() {
      var allClassNames = (0, _classnames.default)('react-trello-board', this.props.className || '');
      return _react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Base.GlobalStyle, null), _react.default.createElement(_BoardContainer.default, (0, _extends2.default)({
        className: allClassNames
      }, this.props, {
        id: this.id
      }))));
    }
  }]);
  return Board;
}(_react.Component);

exports.default = Board;