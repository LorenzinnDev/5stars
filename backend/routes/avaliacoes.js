import express from "express";
import AvaliacaoController from "../controllers/avaliacoesController.js";

const router = express.Router();

router
  .post("/avaliacoes", AvaliacaoController.cadastrarAvaliacao)
  .get("/avaliacoes", AvaliacaoController.getAvaliacoes)
  .get("/avaliacoes/:id", AvaliacaoController.getAvaliacoesPorId)
  .delete("/avaliacoes/:id", AvaliacaoController.excluirAvaliacao)
  

export default router;