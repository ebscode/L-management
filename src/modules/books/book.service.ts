import type { TBook } from "./book.interface";
import { Book } from "./book.model";

const createBook=(payload:TBook)=>{
const result=Book.create(payload)
return result;
}

const getAllbooks=async()=>{
 const result=await Book.find()
 return result;
}
const getBookById=async(Id:string)=>{
 const result=await Book.findById(Id)
 return result;
}

const updateBookById=async(id:string,payload:TBook)=>{
 const result=await Book.findByIdAndUpdate(id,
    {
  ...payload,
  updatedAt:Date.now()
 },
  {
  new:true,
  runValidators:true
 })
 return result;
}

const deleteBookById=async(id:string)=>{
 const result=await Book.findByIdAndDelete(id)
 return result;
}


export const BookService={
 createBook,
 getAllbooks,
 getBookById,
 updateBookById,
 deleteBookById,
}