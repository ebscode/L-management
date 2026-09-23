import type { Request, Response } from "express";
import { BorrowService } from "./borrow.service";

const borrowedBook=async(req:Request,res:Response)=>{
try{
  const data=req.body
 const result=await  BorrowService.borrowedBook(data)
res.status(200).json({
 success:true,
 message:"Book borrowed successfully",
 data:result
})
}catch(err:any){
 res.status(500).json({
 success:false,
 message:"could not borrow book",
 error:err
})
}

}

export const BorrowController={
  borrowedBook
}