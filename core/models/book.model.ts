// core/models/book.model.ts

import {Entity, Column, PrimaryColumn} from "typeorm";
import {DB} from "../database/app.db";

@Entity({name: "books"})
export class Book {

    @PrimaryColumn()
    book_id: number;

    @Column()
    title: string;
}