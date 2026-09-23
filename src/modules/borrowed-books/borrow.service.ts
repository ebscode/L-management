import { Book } from '../books/book.model';
import type { TborrowedBook } from './borrow.interface';
import { BorrowedBook } from './borrow.model';

const borrowedBook = async (payload:TborrowedBook) => {
  const result1 = await Book.findById(payload.book);

  if (result1 && result1.copies >= payload.quantity) 
   {
    const newCopies=result1.copies - payload.quantity
    const result2 = await Book.findByIdAndUpdate(
      payload.book,
      {
        copies: newCopies,
        available:newCopies>0?true:false,
        
      },
      { new: true, runValidators: true },
    );
    const result3 = await BorrowedBook.create(payload);
    return result3;
  } else {
    const e = new Error(`not enough copies available for book with title ${payload.book}`);
    throw e;
  }
};

export const BorrowService = {
  borrowedBook,
};
