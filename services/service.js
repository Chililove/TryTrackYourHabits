const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (reg, res) => {
    res.send('Habit Tracker API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is runing on port ${PORT}'));

