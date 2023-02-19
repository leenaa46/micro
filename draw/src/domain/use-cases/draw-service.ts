import {AddDrawParams, DrawModel} from "@/domain/models/draw";

export const DRAW_SERVICE = 'DRAW_SERVICE'

export interface IDrawService {
    draw(data: AddDrawParams): Promise<DrawModel>;
}
