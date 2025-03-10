const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS
app.use(cors());

// Ruta GET que devuelve el JSON
app.get("/api/data", (req, res) => {
  res.json({
    title: "hola titulo",
    comment: "Servicio listo",
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
