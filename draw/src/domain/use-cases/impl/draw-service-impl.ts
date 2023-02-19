import {Adapter, Service} from "@tsclean/core";
import {IDrawService} from "@/domain/use-cases/draw-service";
import {DRAW_REPOSITORY, IDrawRepository} from "@/domain/models/contracts/draw-repository";
import {AddDrawParams, DrawModel} from "@/domain/models/draw";

@Service()
export class DrawServiceImpl implements IDrawService {
    constructor(
        @Adapter(DRAW_REPOSITORY)
        private readonly drawRepository: IDrawRepository
    ) {
    }

    async draw(data: AddDrawParams): Promise<DrawModel> {
        const {number} = data

        return this.drawRepository.save({
            number: number,
            date: new Date().toString()
        })
    }
}
