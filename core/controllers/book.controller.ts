// core/controllers/book.controller.ts

import {BookService} from '../services/book.service';

export class BookController {

    private BookService : BookService = new BookService();

    constructor() {}

    /**
     * get
     */
    getBooks() {
        return this.BookService.getBooks();
    }
}