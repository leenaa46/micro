export type DrawModel = {
    id: string | number;
    number: number;
    date: string;
}

export type AddDrawParams = Omit<DrawModel, 'id'>
