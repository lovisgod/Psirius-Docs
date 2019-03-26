import express from 'express';
import * as controller from '../controllers/controller';

const router = express.Router();

router.post('/save_note', controller.save_note);
router.get('/list_notes', controller.list_notes);
router.get('/select_note', controller.select_note);

export default router;