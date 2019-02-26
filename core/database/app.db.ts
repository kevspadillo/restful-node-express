import * as mysql from 'mysql';

import {Book} from "../models/book.model";
import {createConnection, Connection} from "typeorm"

export class DB {

    private conn: Promise<Connection>;

    constructor() {}

    /**
     * connect
     */
    public connect(): Promise<Connection> {

        if (!this.conn) {
            this.conn =  createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "ims_db",
                entities: [
                    Book
                ],
                synchronize: true,
                logging: false
            });
        }

        return this.conn;
    }
}