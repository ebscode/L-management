import { model, Schema } from "mongoose";
import type { TborrowedBook } from "./borrow.interface";

const borrowedSchema=new Schema<TborrowedBook>({
 book:{type:String,required:true},
 quantity:{ type:Number,required:true},
 dueDate:{type:Date,required:true},
 createdAt:{type:Date, default:Date.now},
 updatedAt:{type:Date,default:Date.now},


})


export const BorrowedBook=model<TborrowedBook>('borrwoedBook',borrowedSchema)