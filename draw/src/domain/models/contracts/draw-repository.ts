import {AddDrawParams, DrawModel} from "@/domain/models/draw";

export const DRAW_REPOSITORY = 'DRAW_REPOSITORY';

export interface IDrawRepository {
    save(data: AddDrawParams): Promise<DrawModel>;
}
