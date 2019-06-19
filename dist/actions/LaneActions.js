"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeLane = exports.moveLane = exports.paginateLane = exports.updateLanes = exports.updateCards = exports.moveCardAcrossLanes = exports.removeCard = exports.addCard = void 0;

var _reduxActions = require("redux-actions");

var addCard = (0, _reduxActions.createAction)('ADD_CARD');
exports.addCard = addCard;
var removeCard = (0, _reduxActions.createAction)('REMOVE_CARD');
exports.removeCard = removeCard;
var moveCardAcrossLanes = (0, _reduxActions.createAction)('MOVE_CARD');
exports.moveCardAcrossLanes = moveCardAcrossLanes;
var updateCards = (0, _reduxActions.createAction)('UPDATE_CARDS');
exports.updateCards = updateCards;
var updateLanes = (0, _reduxActions.createAction)('UPDATE_LANES');
exports.updateLanes = updateLanes;
var paginateLane = (0, _reduxActions.createAction)('PAGINATE_LANE');
exports.paginateLane = paginateLane;
var moveLane = (0, _reduxActions.createAction)('MOVE_LANE');
exports.moveLane = moveLane;
var removeLane = (0, _reduxActions.createAction)('REMOVE_LANE');
exports.removeLane = removeLane;