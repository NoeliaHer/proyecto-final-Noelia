const express = require('express');
const app = express();
const port = 3001;

app.use(express.json()); // Middleware para parsear JSON

// Datos en memoria
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// Obtener todos los items
app.get('/items', (req, res) => {
  res.json(items);
});

// Obtener un item por id
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// Crear un nuevo item
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Actualizar un item
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
});

// Eliminar un item
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

