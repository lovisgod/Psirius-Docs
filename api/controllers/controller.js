import pool from '../utils/db';
import path from 'path';


export const landingpage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../index.html'));
};

export const save_note = (req, res) => {
   const  usernote = {
        username : req.body.username,
        title : req.body.title,
        content : req.body.content,
    };
    pool.query(`INSERT INTO "usernote"("username", "title","content")VALUES($1,$2,$3)`,
    [usernote.username, usernote.title, usernote.content], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(404).send(err.message);
        } 
        else {
            res.status(200).send(usernote);
        }
    });
};

export const list_notes = (req, res) => {
    const {username} = req.params;
    pool.query('SELECT * FROM "usernote" WHERE username = $1',[username],
    (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(404).send(err.message);
        }
        else {
            res.status(200).send({notes: result.rows});
        }
    });
};