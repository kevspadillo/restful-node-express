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
                    this.BookController.getBooks()
                        .then((books => {
                            res.status(200).json({data : books});
                        }));
                }
            )
            .post(
                (req: Request, res: Response) => {
                    this.BookController.createBook(req.body)
                        .then((result) => {
                            res.status(200).json(result)
                        });
                }
            );
        
        app.route('/book/:bookId')
            .get(
                (req: Request, res: Response) => {
                    this.BookController.getBook(req.params.bookId)
                        .then((book) => {
                            res.status(200).json(book)
                        });
                }
            )
            .put(
                (req: Request, res: Response) => {
                    this.BookController.updateBook(req.params.bookId, req.body)
                        .then((result) => {
                            res.status(200).json(result)
                        });
                }
            )
            .delete(
                (req: Request, res: Response) => {
                    this.BookController.deleteBook(req.params.bookId)
                        .then((result) => {
                            res.status(200).json(result.affected)
                        });
                }
            );
    }
}