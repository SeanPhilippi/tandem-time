import express from 'express';
import bodyParser from 'body-parser';
import store from './games';

let games = store;

const app = express();

const simplifiedGames = () => games.map(({id, name}) => ({
    id,
    name,
}));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.json('Wrong endpoint, try again :P');
});

app.get('/games', (req, res) => {
    res.status(200).send(simplifiedGames());
});

app.get('/games/:id', (req, res) => {
    res.status(200).send(
        games.find(game => game.id == req.params.id)
    );
});

app.post('/games/add', (req, res) => {
    const game = req.query
    if (!game.name) return res.status(400).send({
        message: 'Invalid game format'
    });
    game.id = 123000 + games.length + 1;
    games.push(game);
    res.status(200).send(game);
});

app.post('/games/edit/:id', (req, res) => {
    const game = req.query;
    if (!game.name) return res.status(400).send({
        message: 'Invalid game format'
    });
    res.status(200).send(game);
});

app.get('/tags/:tag', (req, res) => {
    console.log('req', req);
    const taggedGames = games.filter(game => game.tags.includes(req.params.tag));
    res.status(200).send(taggedGames);
});

const port = 3001;

app.listen(port, () => {
    console.log(`Lame server thing started on port ${port}...`)
});

