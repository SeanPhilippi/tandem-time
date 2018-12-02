import express from 'express';
import bodyParser from 'body-parser';
import store from './games';

const app = express();

const simplifiedGames = store.games.map(({id, name}) => ({
    id,
    name,
}));

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.json('Wrong endpoint, try again :P');
});

app.get('/games', (req, res) => {
    res.status(200).json(simplifiedGames);
});

app.get('/games/detail/:id', (req, res) => {
    res.status(200).send(
        store.games.find(game => game.id = req.params.id)
    );
});

const port = 3001;

app.listen(port, () => {
    console.log(`Lame server thing started on port ${port}...`)
});

