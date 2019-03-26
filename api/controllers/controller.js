import pool from '../utils/db';
import * as note from '../utils/model';
const usernote = note.note;
const user = note.user;
export const save_note = (req, res) => {
    usernote;
    pool.query(`INSERT INTO "usernote"("username", "title","content")VALUES($1,$2,$3)`,
    [usernote.username, usernote.title, usernote.content], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(404).send(err.message);
        } 
        else {
            res.status(200).send(usernote);
        }
    })
};

export const list_notes = (req, res) => {
    user;
    pool.query(`SELECT * FROM "usernote" WHERE username = $1`,[user.username],
    (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(404).send(err.message);
        }
        else {
            res.status(200).send(result.rows[0]);
        }
    })
};