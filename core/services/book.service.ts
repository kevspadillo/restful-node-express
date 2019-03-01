// core/models/book.model.ts

import {Entity, Column, PrimaryColumn, Connection, getConnection, InsertResult, UpdateResult, DeleteResult} from "typeorm";
import {DB} from "../database/app.db";
import {Book} from "../models/book.model";

export class BookService {

    private DB : DB = new DB();

    constructor() {
        
    }
    
    /**
     * Connects to the database and fetches books
     */
    public async getBooks() : Promise<Book[]> {
        return this.DB.connect().then((connection) => {
            return connection.manager.find(Book);
        })
    }

    /**
     * Connects to the database and fetch a book record
     * @param bookId 
     */
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


    /**
     * Connects to the database and saves a new book record
     * @param bookData 
     */
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

    /**
     * Connects to the database and updates a book record based on the provided book id
     * @param bookId 
     * @param bookData 
     */
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

    /**
     * Connects to the database and deletes a book record
     * @param bookId 
     */
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