// core/controllers/book.controller.ts

import {Book} from '../models/book.model';

export class BookController {

    private Book: Book = new Book();

    constructor() {

    }

    /**
     * get
     */
    getBooks() {
        return this.Book.getBooks();        
    }
}