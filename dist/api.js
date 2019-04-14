"use strict";

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("./router/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use('/api/v1', _router.default);
const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('connecting through port ' + port + "...... please wait ");
});