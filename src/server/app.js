import express from 'express';
import { join } from 'path';
import { loadTemplateBlocking } from './template';

global.htmlTemplate = loadTemplateBlocking();

const app = express();
app.set('port', process.env.PORT || 3001);
app.use('/template.html', (req, res) => res.status(404).send('NOT FOUND'));
app.use(express.static(join(__dirname, '../../dist'), { maxAge: '7d' })); //seven day cache
app.use(express.static(join(__dirname, '../../public')));

global.navigator = { userAgent: 'all' };

export default app;
