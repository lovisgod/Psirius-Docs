"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list_notes = exports.save_note = void 0;

var _db = _interopRequireDefault(require("../utils/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const save_note = (req, res) => {
  const usernote = {
    username: req.body.username,
    title: req.body.title,
    content: req.body.content
  };

  _db.default.query(`INSERT INTO "usernote"("username", "title","content")VALUES($1,$2,$3)`, [usernote.username, usernote.title, usernote.content], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(404).send(err.message);
    } else {
      res.status(200).send(usernote);
    }
  });
};

exports.save_note = save_note;

const list_notes = (req, res) => {
  const {
    username
  } = req.params;

  _db.default.query('SELECT * FROM "usernote" WHERE username = $1', [username], (err, result) => {
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