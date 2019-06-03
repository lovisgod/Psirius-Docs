"use strict";

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("./router/router"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import path from 'path';
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use('/api/v1', _router["default"]);
var port = process.env.PORT || 7000;
app.listen(port, function () {
  console.log('connecting through port ' + port + "...... please wait ");
});