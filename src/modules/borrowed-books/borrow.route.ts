import express from 'express';
import { BorrowController } from './borrow.controller';

const router=express.Router();


router.post('/',BorrowController.borrowedBook)
router.get('/',BorrowController.borrowedBookSummary)


export  const borrowedBookRouter=router