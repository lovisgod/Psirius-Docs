"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list_notes = exports.save_note = exports.landingpage = void 0;

var _db = _interopRequireDefault(require("../utils/db"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var landingpage = function landingpage(req, res) {
  res.sendFile(_path.default.join(__dirname + '/../../index.html'));
};

exports.landingpage = landingpage;

var save_note = function save_note(req, res) {
  var usernote = {
    username: req.body.username,
    title: req.body.title,
    content: req.body.content
  };

  _db.default.query("INSERT INTO \"usernote\"(\"username\", \"title\",\"content\")VALUES($1,$2,$3)", [usernote.username, usernote.title, usernote.content], function (err, result) {
    if (err) {
      console.log(err);
      return res.status(404).send(err.message);
    } else {
      res.status(200).send(usernote);
    }
  });
};

exports.save_note = save_note;

var list_notes = function list_notes(req, res) {
  var username = req.params.username;

  _db.default.query('SELECT * FROM "usernote" WHERE username = $1', [username], function (err, result) {
    if (err) {
      console.log(err.message);
      return res.status(404).send(err.message);
    } else {
      res.status(200).send({
        notes: result.rows
      });
    }
  });
};

exports.list_notes = list_notes;