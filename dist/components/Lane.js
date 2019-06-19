"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _Container = _interopRequireDefault(require("../dnd/Container"));

var _Draggable = _interopRequireDefault(require("../dnd/Draggable"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _reactPopover = _interopRequireDefault(require("@terebentina/react-popover"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _Card = _interopRequireDefault(require("./Card"));

var _NewCard = _interopRequireDefault(require("./NewCard"));

var _Base = require("../styles/Base");

var laneActions = _interopRequireWildcard(require("../actions/LaneActions"));

var _Elements = require("../styles/Elements");

var _classnames = _interopRequireDefault(require("classnames"));

var Lane =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Lane, _Component);

  function Lane() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Lane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Lane)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      loading: false,
      currentPage: _this.props.currentPage,
      addCardMode: false,
      collapsed: false,
      isDraggingOver: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleScroll", function (evt) {
      var node = evt.target;
      var elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      var onLaneScroll = _this.props.onLaneScroll;

      if (elemScrolPosition <= 0 && onLaneScroll && !_this.state.loading) {
        var currentPage = _this.state.currentPage;

        _this.setState({
          loading: true
        });

        var nextPage = currentPage + 1;
        onLaneScroll(nextPage, _this.props.id).then(function (moreCards) {
          if (!moreCards || moreCards.length === 0) {
            // if no cards present, stop retrying until user action
            node.scrollTop = node.scrollTop - 100;
          } else {
            _this.props.actions.paginateLane({
              laneId: _this.props.id,
              newCards: moreCards,
              nextPage: nextPage
            });
          }

          _this.setState({
            loading: false
          });
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "laneDidMount", function (node) {
      if (node) {
        node.addEventListener('scroll', _this.handleScroll);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "removeCard", function (laneId, cardId) {
      _this.props.actions.removeCard({
        laneId: laneId,
        cardId: cardId
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleCardClick", function (e, card) {
      var onCardClick = _this.props.onCardClick;
      onCardClick && onCardClick(card.id, card.metadata, card.laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "showEditableCard", function () {
      _this.setState({
        addCardMode: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "hideEditableCard", function () {
      _this.setState({
        addCardMode: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "addNewCard", function (params) {
      var laneId = _this.props.id;
      var id = (0, _v.default)();

      _this.hideEditableCard();

      var card = (0, _objectSpread2.default)({
        id: id
      }, params);

      _this.props.actions.addCard({
        laneId: laneId,
        card: card
      });

      _this.props.onCardAdd(card, laneId);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderAddCardLink", function () {
      var _this$props = _this.props,
          addCardLink = _this$props.addCardLink,
          addCardTitle = _this$props.addCardTitle;

      if (addCardLink) {
        return _react.default.createElement("span", {
          onClick: _this.showEditableCard
        }, addCardLink);
      } else {
        return _react.default.createElement(_Base.AddCardLink, {
          onClick: _this.showEditableCard
        }, addCardTitle);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderNewCard", function () {
      var _this$props2 = _this.props,
          newCardTemplate = _this$props2.newCardTemplate,
          id = _this$props2.id;

      if (newCardTemplate) {
        var newCardWithProps = _react.default.cloneElement(newCardTemplate, {
          onCancel: _this.hideEditableCard,
          onAdd: _this.addNewCard,
          laneId: id
        });

        return _react.default.createElement("span", null, newCardWithProps);
      } else {
        return _react.default.createElement(_NewCard.default, {
          onCancel: _this.hideEditableCard,
          onAdd: _this.addNewCard
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragStart", function (_ref) {
      var payload = _ref.payload;
      var handleDragStart = _this.props.handleDragStart;
      handleDragStart && handleDragStart(payload.id, payload.laneId);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "shouldAcceptDrop", function (sourceContainerOptions) {
      return _this.props.droppable && sourceContainerOptions.groupName === _this.groupName;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragEnd", function (laneId, result) {
      var handleDragEnd = _this.props.handleDragEnd;
      var addedIndex = result.addedIndex,
          payload = result.payload;

      _this.setState({
        isDraggingOver: false
      });

      if (addedIndex != null) {
        var newCard = (0, _objectSpread2.default)({}, (0, _cloneDeep.default)(payload), {
          laneId: laneId
        });
        var response = handleDragEnd ? handleDragEnd(payload.id, payload.laneId, laneId, addedIndex, newCard) : true;

        if (response === undefined || !!response) {
          _this.props.actions.moveCardAcrossLanes({
            fromLaneId: payload.laneId,
            toLaneId: laneId,
            cardId: payload.id,
            index: addedIndex
          });
        }

        return response;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderDragContainer", function (isDraggingOver) {
      var _this$props3 = _this.props,
          laneSortFunction = _this$props3.laneSortFunction,
          editable = _this$props3.editable,
          hideCardDeleteIcon = _this$props3.hideCardDeleteIcon,
          tagStyle = _this$props3.tagStyle,
          cardStyle = _this$props3.cardStyle,
          draggable = _this$props3.draggable,
          cardDraggable = _this$props3.cardDraggable,
          cards = _this$props3.cards,
          cardDragClass = _this$props3.cardDragClass,
          id = _this$props3.id;
      var _this$state = _this.state,
          addCardMode = _this$state.addCardMode,
          collapsed = _this$state.collapsed;
      var showableCards = collapsed ? [] : cards;

      var cardList = _this.sortCards(showableCards, laneSortFunction).map(function (card, idx) {
        var cardToRender = _react.default.createElement(_Card.default, (0, _extends2.default)({
          key: card.id,
          index: idx,
          customCardLayout: _this.props.customCardLayout,
          customCard: _this.props.children,
          tagStyle: tagStyle,
          cardStyle: cardStyle,
          removeCard: _this.removeCard,
          onClick: function onClick(e) {
            return _this.handleCardClick(e, card);
          },
          onDelete: _this.props.onCardDelete,
          editable: editable,
          hideCardDeleteIcon: hideCardDeleteIcon
        }, card));

        return draggable && cardDraggable ? _react.default.createElement(_Draggable.default, {
          key: card.id
        }, cardToRender) : _react.default.createElement("span", {
          key: card.id
        }, cardToRender);
      });

      return _react.default.createElement(_Base.ScrollableLane, {
        ref: _this.laneDidMount,
        isDraggingOver: isDraggingOver
      }, _react.default.createElement(_Container.default, {
        orientation: "vertical",
        groupName: _this.groupName,
        dragClass: cardDragClass,
        onDragStart: _this.onDragStart,
        onDrop: function onDrop(e) {
          return _this.onDragEnd(id, e);
        },
        onDragEnter: function onDragEnter() {
          return _this.setState({
            isDraggingOver: true
          });
        },
        onDragLeave: function onDragLeave() {
          return _this.setState({
            isDraggingOver: false
          });
        },
        shouldAcceptDrop: _this.shouldAcceptDrop,
        getChildPayload: function getChildPayload(index) {
          return _this.props.getCardDetails(id, index);
        }
      }, cardList), editable && !addCardMode && _this.renderAddCardLink(), addCardMode && _this.renderNewCard());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "removeLane", function () {
      var id = _this.props.id;

      _this.props.actions.removeLane({
        laneId: id
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "laneMenu", function () {
      return _react.default.createElement(_reactPopover.default, {
        className: "menu",
        position: "bottom",
        trigger: _react.default.createElement(_Elements.MenuButton, null, "\u22EE")
      }, _react.default.createElement(_Elements.LaneMenuHeader, null, _react.default.createElement(_Elements.LaneMenuTitle, null, "Lane actions"), _react.default.createElement(_Elements.DeleteWrapper, null, _react.default.createElement(_Elements.GenDelButton, null, "\u2716"))), _react.default.createElement(_Elements.LaneMenuContent, null, _react.default.createElement(_Elements.LaneMenuItem, {
        onClick: _this.removeLane
      }, "Delete Lane...")));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderHeader", function () {
      var _this$props4 = _this.props,
          customLaneHeader = _this$props4.customLaneHeader,
          canAddLanes = _this$props4.canAddLanes;

      if (customLaneHeader) {
        var customLaneElement = _react.default.cloneElement(customLaneHeader, (0, _objectSpread2.default)({}, _this.props));

        return _react.default.createElement("span", null, customLaneElement);
      } else {
        var _this$props5 = _this.props,
            title = _this$props5.title,
            label = _this$props5.label,
            titleStyle = _this$props5.titleStyle,
            labelStyle = _this$props5.labelStyle;
        return _react.default.createElement(_Base.LaneHeader, {
          onDoubleClick: _this.toggleLaneCollapsed
        }, _react.default.createElement(_Base.Title, {
          style: titleStyle
        }, title), label && _react.default.createElement(_Base.RightContent, null, _react.default.createElement("span", {
          style: labelStyle
        }, label)), canAddLanes && _this.laneMenu());
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderFooter", function () {
      var _this$props6 = _this.props,
          collapsibleLanes = _this$props6.collapsibleLanes,
          cards = _this$props6.cards;
      var collapsed = _this.state.collapsed;

      if (collapsibleLanes && cards.length > 0) {
        return _react.default.createElement(_Base.LaneFooter, {
          onClick: _this.toggleLaneCollapsed
        }, collapsed ? _react.default.createElement(_Elements.ExpandBtn, null) : _react.default.createElement(_Elements.CollapseBtn, null));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "toggleLaneCollapsed", function () {
      _this.props.collapsibleLanes && _this.setState(function (state) {
        return {
          collapsed: !state.collapsed
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Lane, [{
    key: "sortCards",
    value: function sortCards(cards, sortFunction) {
      if (!cards) return [];
      if (!sortFunction) return cards;
      return cards.concat().sort(function (card1, card2) {
        return sortFunction(card1, card2);
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual.default)(this.props.cards, nextProps.cards)) {
        this.setState({
          currentPage: nextProps.currentPage
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          loading = _this$state2.loading,
          isDraggingOver = _this$state2.isDraggingOver;
      var _this$props7 = this.props,
          id = _this$props7.id,
          onLaneClick = _this$props7.onLaneClick,
          onLaneScroll = _this$props7.onLaneScroll,
          onCardClick = _this$props7.onCardClick,
          onCardAdd = _this$props7.onCardAdd,
          onCardDelete = _this$props7.onCardDelete,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props7, ["id", "onLaneClick", "onLaneScroll", "onCardClick", "onCardAdd", "onCardDelete"]);
      var allClassNames = (0, _classnames.default)('react-trello-lane', this.props.className || '');
      return _react.default.createElement(_Base.Section, (0, _extends2.default)({}, otherProps, {
        key: id,
        onClick: function onClick() {
          return onLaneClick && onLaneClick(id);
        },
        draggable: false,
        className: allClassNames
      }), this.renderHeader(), this.renderDragContainer(isDraggingOver), loading && _react.default.createElement(_Loader.default, null), this.renderFooter());
    }
  }, {
    key: "groupName",
    get: function get() {
      var boardId = this.props.boardId;
      return "TrelloBoard".concat(boardId, "Lane");
    }
  }]);
  return Lane;
}(_react.Component);

Lane.propTypes = {
  actions: _propTypes.default.object,
  children: _propTypes.default.node,
  id: _propTypes.default.string.isRequired,
  boardId: _propTypes.default.string,
  title: _propTypes.default.node,
  index: _propTypes.default.number,
  laneSortFunction: _propTypes.default.func,
  style: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  labelStyle: _propTypes.default.object,
  customLaneHeader: _propTypes.default.element,
  customCardLayout: _propTypes.default.bool,
  cards: _propTypes.default.array,
  label: _propTypes.default.string,
  currentPage: _propTypes.default.number,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  droppable: _propTypes.default.bool,
  onLaneScroll: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  newCardTemplate: _propTypes.default.node,
  addCardLink: _propTypes.default.node,
  addCardTitle: _propTypes.default.string,
  editable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  canAddLanes: _propTypes.default.bool
};
Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onCardAdd: function onCardAdd() {}
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(laneActions, dispatch)
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Lane);

exports.default = _default;