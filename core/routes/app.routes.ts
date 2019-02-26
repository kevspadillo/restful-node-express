// core/routes/app.routes.ts

import {Request, Response} from "express";

export class Routes {
    /**
     * routes
     */
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200)
                    .send({
                        message: 'Get request success'
                    })
            })
    }
}