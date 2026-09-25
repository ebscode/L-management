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


const borrowedBookSummary=async()=>{
 const result=await BorrowedBook.aggregate([

{$group:{
    _id:"$book",
    totalQuantity:{$sum:"$quantity"}
  }},
  
{$lookup:{
  from:"books",
  localField:"_id",
  foreignField:"_id",
  as:"bookinfo"


}},
{$unwind:"$bookinfo"},
{
  $project:{
    _id:0,
    
    book:{
      title:"$bookinfo.title",
      isbn:"$bookinfo.isbn"
    },
    totalQuantity:1,
    
  }
}








  // 
 ])
 return result
}

export const BorrowService = {
  borrowedBook,
  borrowedBookSummary
};
