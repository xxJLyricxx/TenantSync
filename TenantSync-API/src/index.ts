import express from 'express';
import cors from 'cors';
import { db } from "../src/firebase/firebase.ts";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/rtdb-test', async (req, res) => {
  const snapshot = await db.ref('health').once('value');
  res.json({
    ok: true,
    value: snapshot.val()
  });
});

app.get('/api/start', (req, res) => {
  res.json({
    message: 'TenantSync API is alive 🚀'
  });
});

app.listen(PORT, () => {
  console.log(`TenantSync API running on http://localhost:${PORT}`);
});
