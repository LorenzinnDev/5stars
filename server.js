// import "dotenv/config";
import app from "./backend/app.js";
// import cors from "cors";

// app.use(cors({
//     origin: 'http://localhost:3001/', //url do frontend
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], //metodos permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'] //headers permitidos
//   }));
  
  const PORT = 3000;
  
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });