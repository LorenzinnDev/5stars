import express from "express";
import avaliacoes from "./avaliacoes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("teste"));

  app.use(
    express.json(),
    avaliacoes
  );
};

export default routes;