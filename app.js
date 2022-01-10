const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
//parse application/json
app.use(bodyParser.json());

//conecion a la base de datos
const mongoose = require("mongoose");

const user = 'juan';
const password = '12345';
const dbname = 'veterinaria';
const uri = `mongodb+srv://${user}:${password}@cluster0.ueefu.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */
//rutas estaticas
app.use(express.static(__dirname + "/public"));


//rutas web
app.use("/", require("./router/RutasWeb"));

app.use("/mascotas",require("./router/Mascotas"));

//rutas sitio web error
app.use((req, res, next) => {
  res.status(404).render('404', {
    titulo: '404',
    description: 'Error 404'
  });
});

//escuchando o llamando el puerto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});