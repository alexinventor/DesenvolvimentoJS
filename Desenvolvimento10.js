import express, { response } from 'express';
import routes from './routes';

const app = express();

app.get('/testando', (req, res) => {
    return response.send('GET /testando')
});

app.listen(3300, () => {console.log('servidor iniciado')});