const app = require('../infra/web/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Servidor rodando na porta ${PORT}`));