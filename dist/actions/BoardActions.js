"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLane = exports.loadBoard = void 0;

var _reduxActions = require("redux-actions");

var loadBoard = (0, _reduxActions.createAction)('LOAD_BOARD');
exports.loadBoard = loadBoard;
var addLane = (0, _reduxActions.createAction)('ADD_LANE');
exports.addLane = addLane;