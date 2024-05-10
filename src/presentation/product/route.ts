import { Router } from "express";
import { ProductController } from "./controller";

export class ProductRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new ProductController();
        routes.get('/',controller.findAll);
        routes.get('/',controller.create);
        routes.get('/',controller.delete);
        routes.get('/',controller.update);

        return routes;
    }
}