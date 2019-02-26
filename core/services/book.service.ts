// core/models/book.model.ts

import {Entity, Column, PrimaryColumn, Connection} from "typeorm";
import {DB} from "../database/app.db";
import {Book} from "../models/book.model";

export class BookService {

    private DB : DB = new DB();

    constructor() {
        
    }
    
    public async getBooks() {
        return this.DB.connect().then((connection) => {
            return connection.manager.find(Book);
        })
    }

    public getBook() {
        return this.DB.connect().then((connection) => {
            return connection.manager.findOne(Book, {book_id : 1})
        })
    }

    public createBook() {
        
    }
}