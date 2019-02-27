// core/models/book.model.ts

import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({name: "books"})
export class Book {

    @PrimaryColumn()
    book_id: number;

    @Column()
    title: string;
}