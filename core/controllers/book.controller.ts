// core/controllers/book.controller.ts

import {Request} from "express";
import {BookService} from '../services/book.service';
import { Book } from '../models/book.model';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

export class BookController {

    private BookService : BookService = new BookService();

    constructor() {}

    /**
     * Returns a book collection
     */
    getBooks(): Promise<Book[]> {
        return this.BookService.getBooks();
    }

    /**
     * Returns a book record
     * @param bookId 
     */
    getBook(bookId: number): Promise<Book> {
        return this.BookService.getBook(bookId);
    }

    /**
     * Save new book record
     * @param bookData 
     */
    createBook(bookData : any): Promise<InsertResult> {
        return this.BookService.createBook(bookData);
    }

    /**
     * Update a book record
     * @param bookId 
     * @param bookData 
     */
    updateBook(bookId: number, bookData: Request): Promise<UpdateResult> {
        return this.BookService.updateBook(bookId, bookData);
    }

    /**
     * Delete a book record
     * @param bookId 
     */
    deleteBook(bookId: number): Promise<DeleteResult> {
        return this.BookService.deleteBook(bookId);
    }
}