import express from 'express';
import bodyParser from 'body-parser';
import games from './games';

const app = express();

const simplifiedGames = games.map(({id, name}) => ({
    id,
    name,
}));

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Wrong endpoint, try again :P');
});
app.get('/games', (req, res) => {
    res.status(200).send(simplifiedGames);
});

const port = 3001;

app.listen(port, () => {
    console.log(`Lame server thing started on port ${port}...`)
});

