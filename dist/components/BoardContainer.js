"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Container = _interopRequireDefault(require("../dnd/Container"));

var _Draggable = _interopRequireDefault(require("../dnd/Draggable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Base = require("../styles/Base");

var _Elements = require("../styles/Elements");

var _Lane = _interopRequireDefault(require("./Lane"));

var _NewLane = _interopRequireDefault(require("./NewLane"));

var _reactPopover = require("@terebentina/react-popover");

var boardActions = _interopRequireWildcard(require("../actions/BoardActions"));

var laneActions = _interopRequireWildcard(require("../actions/LaneActions"));

var BoardContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BoardContainer, _Component);

  function BoardContainer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BoardContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BoardContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      addLaneMode: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragStart", function (_ref) {
      var payload = _ref.payload;
      var handleLaneDragStart = _this.props.handleLaneDragStart;
      handleLaneDragStart(payload.id);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onLaneDrop", function (_ref2) {
      var removedIndex = _ref2.removedIndex,
          addedIndex = _ref2.addedIndex,
          payload = _ref2.payload;
      var _this$props = _this.props,
          actions = _this$props.actions,
          handleLaneDragEnd = _this$props.handleLaneDragEnd;

      if (removedIndex !== addedIndex) {
        actions.moveLane({
          oldIndex: removedIndex,
          newIndex: addedIndex
        });
        handleLaneDragEnd(removedIndex, addedIndex, payload);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getCardDetails", function (laneId, cardIndex) {
      return _this.props.reducerData.lanes.find(function (lane) {
        return lane.id === laneId;
      }).cards[cardIndex];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getLaneDetails", function (index) {
      return _this.props.reducerData.lanes[index];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "wireEventBus", function () {
      var _this$props2 = _this.props,
          actions = _this$props2.actions,
          eventBusHandle = _this$props2.eventBusHandle;
      var eventBus = {
        publish: function publish(event) {
          switch (event.type) {
            case 'ADD_CARD':
              return actions.addCard({
                laneId: event.laneId,
                card: event.card
              });

            case 'REMOVE_CARD':
              return actions.removeCard({
                laneId: event.laneId,
                cardId: event.cardId
              });

            case 'REFRESH_BOARD':
              return actions.loadBoard(event.data);

            case 'MOVE_CARD':
              return actions.moveCardAcrossLanes({
                fromLaneId: event.fromLaneId,
                toLaneId: event.toLaneId,
                cardId: event.cardId,
                index: event.index
              });

            case 'UPDATE_LANES':
              return actions.updateLanes(event.lanes);
          }
        }
      };
      eventBusHandle(eventBus);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "hideEditableLane", function () {
      _this.setState({
        addLaneMode: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "showEditableLane", function () {
      _this.setState({
        addLaneMode: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "addNewLane", function (params) {
      _this.hideEditableLane();

      _this.props.actions.addLane(params);

      _this.props.onLaneAdd(params);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderNewLane", function () {
      var newLaneTemplate = _this.props.newLaneTemplate;

      if (newLaneTemplate) {
        var newCardWithProps = _react.default.cloneElement(newLaneTemplate, {
          onCancel: _this.hideEditableLane,
          onAdd: _this.addNewLane
        });

        return _react.default.createElement("span", null, newCardWithProps);
      } else {
        return _react.default.createElement(_NewLane.default, {
          onCancel: _this.hideEditableLane,
          onAdd: _this.addNewLane
        });
      }
    });
    return _this;
  }

  (0, _createClass2.default)(BoardContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          actions = _this$props3.actions,
          eventBusHandle = _this$props3.eventBusHandle;
      actions.loadBoard(this.props.data);

      if (eventBusHandle) {
        this.wireEventBus();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // nextProps.data changes when external Board input props change and nextProps.reducerData changes due to event bus or UI changes
      var _this$props4 = this.props,
          data = _this$props4.data,
          reducerData = _this$props4.reducerData,
          onDataChange = _this$props4.onDataChange;

      if (nextProps.reducerData && !(0, _isEqual.default)(reducerData, nextProps.reducerData)) {
        onDataChange(nextProps.reducerData);
      }

      if (nextProps.data && !(0, _isEqual.default)(nextProps.data, data)) {
        this.props.actions.loadBoard(nextProps.data);
        onDataChange(nextProps.data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          id = _this$props5.id,
          reducerData = _this$props5.reducerData,
          draggable = _this$props5.draggable,
          laneDraggable = _this$props5.laneDraggable,
          laneDragClass = _this$props5.laneDragClass,
          style = _this$props5.style,
          onDataChange = _this$props5.onDataChange,
          onLaneScroll = _this$props5.onLaneScroll,
          onCardClick = _this$props5.onCardClick,
          onLaneClick = _this$props5.onLaneClick,
          onLaneAdd = _this$props5.onLaneAdd,
          onCardDelete = _this$props5.onCardDelete,
          onCardAdd = _this$props5.onCardAdd,
          addLaneTitle = _this$props5.addLaneTitle,
          editable = _this$props5.editable,
          canAddLanes = _this$props5.canAddLanes,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props5, ["id", "reducerData", "draggable", "laneDraggable", "laneDragClass", "style", "onDataChange", "onLaneScroll", "onCardClick", "onLaneClick", "onLaneAdd", "onCardDelete", "onCardAdd", "addLaneTitle", "editable", "canAddLanes"]);
      var addLaneMode = this.state.addLaneMode; // Stick to whitelisting attributes to segregate board and lane props

      var passthroughProps = (0, _pick.default)(this.props, ['onLaneScroll', 'onCardClick', 'onCardDelete', 'onCardAdd', 'onLaneClick', 'addCardLink', 'laneSortFunction', 'draggable', 'cardDraggable', 'collapsibleLanes', 'editable', 'canAddLanes', 'hideCardDeleteIcon', 'customCardLayout', 'customLaneHeader', 'tagStyle', 'handleDragStart', 'handleDragEnd', 'cardDragClass', 'children', 'addLaneTitle', 'addCardTitle', 'newLaneTemplate', 'newCardTemplate']);
      return _react.default.createElement(_Base.BoardDiv, (0, _extends2.default)({
        style: style
      }, otherProps, {
        draggable: false
      }), _react.default.createElement(_reactPopover.PopoverWrapper, null, _react.default.createElement(_Container.default, {
        orientation: "horizontal",
        onDragStart: this.onDragStart,
        dragClass: laneDragClass,
        dropClass: "",
        onDrop: this.onLaneDrop,
        lockAxis: "x",
        getChildPayload: function getChildPayload(index) {
          return _this2.getLaneDetails(index);
        },
        groupName: this.groupName
      }, reducerData.lanes.map(function (lane, index) {
        var id = lane.id,
            droppable = lane.droppable,
            otherProps = (0, _objectWithoutProperties2.default)(lane, ["id", "droppable"]);

        var laneToRender = _react.default.createElement(_Lane.default, (0, _extends2.default)({
          key: id,
          boardId: _this2.groupName,
          id: id,
          getCardDetails: _this2.getCardDetails,
          index: index,
          droppable: droppable === undefined ? true : droppable
        }, otherProps, passthroughProps));

        return draggable && laneDraggable ? _react.default.createElement(_Draggable.default, {
          key: lane.id
        }, laneToRender) : _react.default.createElement("span", {
          key: lane.id
        }, laneToRender);
      }))), canAddLanes && _react.default.createElement(_Container.default, {
        orientation: "horizontal"
      }, editable && !addLaneMode ? _react.default.createElement(_Base.LaneSection, {
        style: {
          width: 200
        }
      }, _react.default.createElement(_Elements.NewLaneButton, {
        onClick: this.showEditableLane
      }, addLaneTitle)) : addLaneMode && this.renderNewLane()));
    }
  }, {
    key: "groupName",
    get: function get() {
      var id = this.props.id;
      return "TrelloBoard".concat(id);
    }
  }]);
  return BoardContainer;
}(_react.Component);

BoardContainer.propTypes = {
  id: _propTypes.default.string,
  actions: _propTypes.default.object,
  data: _propTypes.default.object.isRequired,
  reducerData: _propTypes.default.object,
  onDataChange: _propTypes.default.func,
  eventBusHandle: _propTypes.default.func,
  onLaneScroll: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  addCardLink: _propTypes.default.node,
  onLaneAdd: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  laneSortFunction: _propTypes.default.func,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  editable: _propTypes.default.bool,
  canAddLanes: _propTypes.default.bool,
  hideCardDeleteIcon: _propTypes.default.bool,
  handleDragStart: _propTypes.default.func,
  handleDragEnd: _propTypes.default.func,
  handleLaneDragStart: _propTypes.default.func,
  handleLaneDragEnd: _propTypes.default.func,
  customCardLayout: _propTypes.default.bool,
  customLaneHeader: _propTypes.default.element,
  style: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  laneDraggable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  laneDragClass: _propTypes.default.string,
  addLaneTitle: _propTypes.default.string,
  addCardTitle: _propTypes.default.string,
  newLaneTemplate: _propTypes.default.node
};
BoardContainer.defaultProps = {
  onDataChange: function onDataChange() {},
  handleDragStart: function handleDragStart() {},
  handleDragEnd: function handleDragEnd() {},
  handleLaneDragStart: function handleLaneDragStart() {},
  handleLaneDragEnd: function handleLaneDragEnd() {},
  onLaneAdd: function onLaneAdd() {},
  editable: false,
  canAddLanes: false,
  hideCardDeleteIcon: false,
  draggable: false,
  collapsibleLanes: false,
  laneDraggable: true,
  cardDraggable: true,
  cardDragClass: 'react_trello_dragClass',
  laneDragClass: 'react_trello_dragLaneClass',
  addLaneTitle: '+ Add another lane',
  addCardTitle: 'Add Card'
};

var mapStateToProps = function mapStateToProps(state) {
  return state.lanes ? {
    reducerData: state
  } : {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)((0, _objectSpread2.default)({}, boardActions, laneActions), dispatch)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

exports.default = _default;