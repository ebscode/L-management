import express from 'express';
import { BorrowController } from './borrow.controller';

const router=express.Router();


router.post('/',BorrowController.borrowedBook)


export  const borrowedBookRouter=router