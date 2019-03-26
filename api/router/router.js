import express from 'express';
import * as controller from '../controllers/controller';

const router = express.Router();

router.get('/', controller.landingpage);
router.post('/save_note', controller.save_note);
//this route adds params to the url
router.get('/list_notes/:username', controller.list_notes);

export default router;