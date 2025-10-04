// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Docker + CI/CD!');
});

// Ne démarrer le serveur que si le fichier est exécuté directement
// (pas lorsqu'il est importé par les tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;