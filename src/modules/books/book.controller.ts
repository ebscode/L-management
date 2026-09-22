import type { Request, Response } from 'express';
import { BookService } from './book.service';
import { error } from 'node:console';

const createBook = async (req: Request, res: Response) => {
  const bookData = req.body;
  const result = await BookService.createBook(bookData);
  res.json({
    success: true,
    message: 'Book created successfully',
    data: result,
  });
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getAllbooks();
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'could ot fetch books',
      error: err,
    });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const bookid = req.params.bookId;
    const result = await BookService.getBookById(bookid);
    res.status(200).json({
      success: true,
      message: 'book retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'could not retprived book',
      error: err,
    });
  }
};
const updateBookById = async (req: Request, res: Response) => {
  try {
    const bookid = req.params.bookId;
    const payload = req.body;
    const result = await BookService.updateBookById(bookid, payload);
    res
      .status(200)
      .json({
        success: true,
        message: 'book updated successfully',
        data: result,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'could not update book',
      error: err,
    });
  }
};
const deleteBookById=async(req:Request,res:Response)=>{
try{
    const bookid=req.params.bookId
  const result=await BookService.deleteBookById(bookid)
  res.status(200).json({
success:true,
message:'book deleted successfully',
data:result

  })
}catch(err:any){
  res.status(500).json({
  success:false,
  message:'could not delete book',
  error:err
})
}



}

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
