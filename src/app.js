import express from "express";

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

import router  from "./routes/main.routes.js";

app.use('/Api',router);

export default app;

