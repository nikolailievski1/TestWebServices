const express = require ("express");
const morgan = require("morgan");
const akademijaHandler = require ("./Handler/akademijaHandler");
const kursHandler = require ("./Handler/kursHandler");
const viewHandler = require ("./Handler/viewHandler");
const auth = require("./Handler/authHandler");
const db = require("./pkg/db/index");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(req.cookies);
    next();
  });

db.init();

app.get("/test", viewHandler.testView);

app.post("/api/v1/auth/create-account", auth.signup);
app.post("/api/v1/auth/login", auth.login);

app.get("/akademii", akademijaHandler.getAll);
app.get("akademija/:id", akademijaHandler.getAkademija);
app.post("/akademija", akademijaHandler.create);
app.patch("/akademija/:id", akademijaHandler.update);
app.delete("/akademija/:id", akademijaHandler.delete);

app.get("/kursevi", kursHandler.getAll);
app.get("kurs/:id", kursHandler.getKurs);
app.post("/kurs", auth.protect, kursHandler.create);
app.patch("/kurs/:id", auth.protect, kursHandler.update);
app.delete("/kurs/:id", auth.protect, kursHandler.delete);

const port = 10000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});