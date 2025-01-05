import express, { Request, Response } from 'express';
import path from 'node:path';
import dotenv from 'dotenv'; // Ensure you use dotenv
import db from './config/connection';
import routes from './routes/index';

dotenv.config();

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));


  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
