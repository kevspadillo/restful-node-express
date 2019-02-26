// core/controllers/book.controller.ts

import {Request} from "express";
import {BookService} from '../services/book.service';
import { Book } from 'models/book.model';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

export class BookController {

    private BookService : BookService = new BookService();

    constructor() {}

    getBooks(): Promise<Book[]> {
        return this.BookService.getBooks();
    }

    getBook(bookId: number): Promise<Book> {
        return this.BookService.getBook(bookId);
    }

    createBook(bookData : any): Promise<InsertResult> {
        return this.BookService.createBook(bookData);
    }

    updateBook(bookId: number, bookData: Request): Promise<UpdateResult> {
        return this.BookService.updateBook(bookId, bookData);
    }

    deleteBook(bookId: number): Promise<DeleteResult> {
        return this.BookService.deleteBook(bookId);
    }
}