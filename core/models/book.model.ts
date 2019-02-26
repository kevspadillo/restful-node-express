// core/models/book.model.ts

import {Entity, Column, PrimaryColumn} from "typeorm";
import {DB} from "../database/app.db";

@Entity({name: "account_types"})
export class Book {

    @PrimaryColumn()
    account_type_code: string


    private DB : DB = new DB();
    
    public getBooks() {
        this.DB.connect().then((response) => {
            console.log(response);
        })
    }
}