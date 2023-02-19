import {Table, Column, Model, Sequelize} from 'sequelize-typescript'
import {DrawModel} from "@/domain/models/draw";

@Table({tableName: 'draws'})
export class DrawModelMysql extends Model<DrawModel> {
    declare id: number;
    declare number: number;
    declare date: string;
}
