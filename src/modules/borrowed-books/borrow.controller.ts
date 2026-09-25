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


const borrowedBookSummary=async(req:Request,res:Response)=>{
  try{
    const result=await BorrowService.borrowedBookSummary()
  res.status(200).json({
    success:true,
    message:"borrowed book summary retrieved successfully",
    data:result
  })
  }
  catch(err:any){
    res.status(500).json({
      success:false,
      message:"book summatu could not retrived",
      error:err
    })
  }
}

export const BorrowController={
  borrowedBook,
  borrowedBookSummary
}