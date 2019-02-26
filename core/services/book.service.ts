// core/models/book.model.ts

import {Entity, Column, PrimaryColumn, Connection, getConnection, InsertResult, UpdateResult, DeleteResult} from "typeorm";
import {DB} from "../database/app.db";
import {Book} from "../models/book.model";

export class BookService {

    private DB : DB = new DB();

    constructor() {
        
    }
    
    public async getBooks() : Promise<Book[]> {
        return this.DB.connect().then((connection) => {
            return connection.manager.find(Book);
        })
    }

    public getBook(bookId : number) : Promise<any> {
        return this.DB.connect().then((connection) => {
            return connection
                .createQueryBuilder()
                .select()
                .from(Book, "books")
                .where("books.book_id = :book_id", {book_id : bookId})
                .execute();
        })
    }

    public createBook(bookData: any) : Promise<InsertResult> {

        const book = {title : bookData.title };

        return this.DB.connect().then((connection) => {
            return connection
                .createQueryBuilder()
                .insert()
                .into(Book)
                .values(book)
                .execute();
        })
    }

    public updateBook(bookId: number, bookData: any) : Promise<UpdateResult> {

        const book = {title : bookData.title };

        return this.DB.connect().then((connection) => {
            return connection.createQueryBuilder()
                .update(Book)
                .set(book)
                .where("book_id = :book_id", {book_id : bookId})
                .execute();
        })
    }

    public deleteBook(bookId) : Promise<DeleteResult> {
        return this.DB.connect().then((connection) => {
            return connection.createQueryBuilder()
                .delete()
                .from(Book)
                .where("book_id = :book_id", {book_id : bookId})
                .execute();
        })
    }
}