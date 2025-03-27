import avaliacoes from "../models/Avalaicao.js";

class AvaliacaoController {
  
  static getAvaliacoes = async (req, res) => {
    try {
      let resultado = await avaliacoes.find(); //sem parâmetros pra retornar tudo
      res.status(200).json(resultado);
    } catch(e) {
      res.status(500).send({message: `${e.message} - erro interno no servidor`});
    }
  }

  static getAvaliacoesPorId = async (req, res) => {
    try  {
      const id = req.params.id;
      let resultado = await avaliacoes.findById(id);
      res.status(200).send(resultado);
    } catch(e) {
      res.status(500).send({message: `${e.message} - id da avaliação não encontrado`});
    }
  }
  
  static cadastrarAvaliacao = async (req, res) => {
    try {
      let avaliacao = new avaliacoes(req.body);

      let avaliacaoResultado = await avaliacao.save();

      res.status(201).send(avaliacaoResultado.toJSON());
    } catch(e){
      res.status(500).send({message: `${e.message} - falha ao cadastrar avaliacão.`});
    }
  }

  static excluirAvaliacao = async (req, res) => {
    try {
      const id = req.params.id;
      await avaliacoes.findByIdAndDelete(id);
      res.status(200).send({message: "Avaliação removida"});
    } catch(e) {
      res.status(500).send({message: e.message});
    }
  } 

}

export default AvaliacaoController