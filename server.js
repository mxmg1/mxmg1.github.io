const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('https://osu.ppy.sh/p/api/', async (req, res) => {
  const userId = req.params.userId;
  const apiUrl = `https://osu.ppy.sh/api/v2/users/${userId}/osu`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Błąd zapytania do API osu! - ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Błąd podczas pobierania danych z API osu!', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
