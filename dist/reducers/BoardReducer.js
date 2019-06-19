"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LaneHelper = _interopRequireDefault(require("../helpers/LaneHelper"));

var boardReducer = function boardReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lanes: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      type = action.type;

  switch (type) {
    case 'LOAD_BOARD':
      return _LaneHelper.default.initialiseLanes(state, payload);

    case 'ADD_CARD':
      return _LaneHelper.default.appendCardToLane(state, payload);

    case 'REMOVE_CARD':
      return _LaneHelper.default.removeCardFromLane(state, payload);

    case 'MOVE_CARD':
      return _LaneHelper.default.moveCardAcrossLanes(state, payload);

    case 'UPDATE_CARDS':
      return _LaneHelper.default.updateCardsForLane(state, payload);

    case 'UPDATE_LANES':
      return _LaneHelper.default.updateLanes(state, payload);

    case 'PAGINATE_LANE':
      return _LaneHelper.default.paginateLane(state, payload);

    case 'MOVE_LANE':
      return _LaneHelper.default.moveLane(state, payload);

    case 'REMOVE_LANE':
      return _LaneHelper.default.removeLane(state, payload);

    case 'ADD_LANE':
      return _LaneHelper.default.addLane(state, payload);

    default:
      return state;
  }
};

var _default = boardReducer;
exports.default = _default;