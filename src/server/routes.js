import express from 'express';
import pageBuilder from './pageBuilder';
import { defaultState as AppReducer } from '@ui/app/reducer';


const router = express.Router();

router.get('*', sendPage);

function sendPage(req, res) {
  res.send(pageBuilder(req));
}

function sendNotFoundPage(res) {
  res.redirect('/404');
}

export default router;
