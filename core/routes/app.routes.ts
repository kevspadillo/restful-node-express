// core/routes/app.routes.ts

import {Request, Response} from "express";
import {BookController} from "../controllers/book.controller";

export class Routes {

    private BookController : BookController = new BookController();

    /**
     * routes
     */
    public routes(app): void {
        app.route('/')
            .get(
                (req: Request, res: Response) => {
                    res.status(200).send({
                        message: 'Get request success'
                    });
            });

        app.route('/book')
            .get(
                (req: Request, res: Response) => {
                    res.status(200).json(this.BookController.getBooks());
                }
            )
            .post(
                (req: Request, res: Response) => {
                    res.status(200).send({
                        message: 'POST Books API'
                    })
                }
            );
        
        app.route('/book/:bookId')
            .get(
                (req: Request, res: Response) => {
                    res.status(200).send({
                        message: 'GET Book API'
                    });
                }
            )
            .put(
                (req: Request, res: Response) => {
                    res.status(200).send({
                        message: 'PUT Book API'
                    });
                }
            )
            .delete(
                (req: Request, res: Response) => {
                    res.status(200).send({
                        message: 'DELETE Book API'
                    });
                }
            );
    }
}