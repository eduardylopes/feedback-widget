import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Running at http://localhost:${process.env.PORT || 3333}`);
});
