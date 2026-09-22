import { Schema, model } from 'mongoose';
import type { TBook } from './book.interface';

const BookSchema = new Schema<TBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, requiredZ: true },
  isbn: { type: String, required: true },
  description: { type: String, required: true },
  copies: { type: Number, required: true },
  available: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const Book = model<TBook>('Book', BookSchema);
