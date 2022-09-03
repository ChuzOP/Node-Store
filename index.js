const express = require('express');
const routerApi = require('./routes/index');

const app = express();//la app que usaremos como main
const port = 3000;
app.use(express.json());//midleWare}


app.get('/', (req, res) => {
    res.send('Hola mi server en Express');
});


routerApi(app);//le mando como argumento "app"

app.listen(port);
