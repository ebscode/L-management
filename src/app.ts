import express from 'express';
import type { Request, Response } from 'express';
import {  BookRoutes } from './modules/books/book.route';


const app = express();
 app.use(express.json());

app.use("/api/books",BookRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello wwww!');
});

export default app;