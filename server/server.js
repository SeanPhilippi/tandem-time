import express from 'express';
import bodyParser from 'body-parser';
import store from './games';

let games = store;

const app = express();

const simplifiedGames = games.map(({ id, name }) => ({
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
    res.status(200).json(simplifiedGames);
});

app.get('/games/:id', (req, res) => {
    res.status(200).send(
        games.find(game => game.id === req.params.id).exec()
            .then(details => {
                return res.send(details);
            })
    );
});

app.get('/games/add', (req, res) => {
    res.status(200).send('wip');
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

