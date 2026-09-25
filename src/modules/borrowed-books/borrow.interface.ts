import type { Types } from "mongoose";

export type TborrowedBook = {
 book:Types.ObjectId;
 quantity:number;
 dueDate:Date;
 createdAt:Date;
 updatedAt:Date;
}