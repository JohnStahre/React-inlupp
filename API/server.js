 // Här talar vi om att vår server base URL ligger på local host port 999 sen går vil till vår app
const app = require('./app');
const mongoose = require('mongoose');
// dotenv filen kan man simulera miljövariabler i och behöver inte deklarera
require ('dotenv').config();  
const cors = require('cors');

const PORT = process.env.PORT || 8085;

const serverURI = 'http://localhost:' + PORT;
// nedan kommer från .env filen där lösenord och databasen här kan det finnas filer som kanske inte är lämpliga att pushas upp på github
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('server running at: ' +serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'))