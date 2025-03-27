import mongoose from "mongoose";

const avaliacaoSchema = new mongoose.Schema(
  {
    id: {type: String},
    nota: {type: Number, required: true},
    feedback: {type: String}
  },
  {
    versionKey: false
  }
)

const avaliacoes = mongoose.model("avaliações", avaliacaoSchema)

export default avaliacoes;