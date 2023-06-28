
import './App.css'

const express = require('express');
const connection = require('./db');
const serverPort = process.env.PORT || (5177);
const app = express();

connection.connect((err) => {
  if (err) {
    console.error('error connecting to db');
  } else {
    console.log('connected to db');
  }
});

app.listen(serverPort);


app.get('/knight', (req, res) => {
  connection.promise().query('SELECT * FROM knight')
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving knight from db.');
    });
});

app.post('/kaamelott', (req, res) => {
  const { id, name, age } = req.body;
  connection.promise()
    .query('INSERT INTO kaamelott (id, name, age) VALUES (?, ?, ?)', [id, name, age])
    .then(([result]) => {
      const createdKnight = { id: result.insertId, name, age };
      res.status(201).json(createdKnight);
    }).catch((err) => { console.error(err); res.sendStatus(500); });
});

app.put('/knights/:id', (req, res) => {
  connection.promise()
    .query(
      'UPDATE knights SET age = ? WHERE id = ?',
      [req.body.age, req.params.id]
    )
    .then(([knights]) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.delete('/knights/:id', (req, res) => {
  connection.promise()
    .query('DELETE FROM knights WHERE id = ?', [req.params.id])
    .then(([result]) => {
      if (result.affectedRows) res.sendStatus(204);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});


const knightsRouter = express.Router();
app.use('/products', productsRouter);

knightsRouter.get('/', (req, res) => { /* GET list */ });
knightsRouter.get('/:id', (req, res) => { /* GET item */ });
knightsRouter.post('/', (req, res) => { /* POST item */ });
knightsRouter.put('/:id', (req, res) => { /* PUT item */ });
knightsRouter.delete('/:id', (req, res) => { /* DELETE item */ });


function App() {

  return
}

export default App
