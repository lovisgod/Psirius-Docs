"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.note = void 0;

var req = require('express').request;

var note = {
  username: req.body.username,
  title: req.body.title,
  content: req.body.content
};
exports.note = note;
var user = {
  username: req.params.username
};
exports.user = user;