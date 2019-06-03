import pool from '../utils/db';
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

export const update_note = (req, res) => {
    const  usernote = {
        id: req.body.id,
        username : req.body.username,
        content : req.body.content,
    };
    pool.query('UPDATE "usernote" SET "content" =$1  WHERE note_id = $2 AND username = $3',
    [usernote.content, usernote.id, usernote.username], (err, result) =>{
        if(err){
            console.log(err.message);
            return res.status(404).send(err.message);
        }
        else {
            res.status(200).send({notes: usernote});
        }
    });
};