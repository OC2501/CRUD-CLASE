import {Router} from "express";
import { ProductRoute } from "./product/route"
export class AppRoute{

    static get routes(): Router{
        const routes = Router();
        
        routes.use('/api/product', ProductRoute.routes );
        
        return routes;
    }
}