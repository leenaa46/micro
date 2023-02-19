import {Get, Mapping} from "@tsclean/core";
import {json} from "sequelize";

@Mapping('/v1/draws')
export class DrawRestController {
    constructor() {
    }

    @Get()
    index() {
        return {
            message: 'Route created successfully.'
        }
    }

}
