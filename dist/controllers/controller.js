"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list_notes = exports.save_note = void 0;

var _db = _interopRequireDefault(require("../utils/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';
// export const landingpage = (req, res) => {
//     res.sendFile(path.join(__dirname + '/../../index.html'));
// };
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