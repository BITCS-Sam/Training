import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Cat } from 'src/typeorm/entities/Cat';
import { CreateCatParam, UpdateCatParam } from 'src/utils/types';
import { Repository, LessThan, MoreThan } from "typeorm"

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat) private catsRepository: Repository<Cat>
    ) { }

    async findAll() {
        return this.catsRepository.find();
    }

    async findSingleCat(id: number) {
        const cat = await this.findOneById(id);
        return cat;
    }

    async createCat(catDetails: CreateCatParam) {
        const newCat = this.catsRepository.create({ ...catDetails })
        return this.catsRepository.save(newCat)
    }

    async searchCatByAgeRange(age_gte: number, age_lte: number) {
        return this.catsRepository
            .createQueryBuilder('cat')
            .where(
                'cat.age <= :ageLte AND cat.age >= :ageGte', {
                ageLte: age_lte,
                ageGte: age_gte
            }
            )
            .getMany();
        // .createQueryBuilder('cat')
        // .where('cat.age <= :ageLte', { ageLte })
        // .andWhere('cat.age >= :ageGte', { ageGte })
        // .getMany();
    }

    async updateCat(id: number, updateCatDto: UpdateCatParam) {
        const cat = await this.findOneById(id);
        const updatedCat = Object.assign(cat, updateCatDto)
        return this.catsRepository.save(updatedCat)
    }

    async deleteCat(id: number) {
        const cat = await this.findOneById(id);
        return this.catsRepository.remove(cat)
    }



    private async findOneById(id: number) {
        let cat;
        try {
            cat = await this.catsRepository.findOneBy({ id: id })
        } catch (err) {
            throw new NotFoundException("Cat Not Found")
        }
        if (!cat) {
            throw new NotFoundException("Cat not found")
        }
        return cat
    }

}
