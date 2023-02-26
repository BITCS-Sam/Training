import { createCatSchema } from './../../schema/createCat.schema';
import { CreateCatDTO } from 'src/cats/dtos/CreateCat.dto';
import { CatsService } from './../../services/cats/cats.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UpdateCatDTO } from 'src/cats/dtos/UpdateCat.dto';
import { JoiValidationPipes } from 'src/cats/validation/joi-validation.pipe';
import { updateCatSchema } from 'src/cats/schema/updateCat.shcema';
import { JwtAuthGuard } from 'src/utils/jwtAuth.guard';

@Controller()
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Get()
    // @UseGuards(JwtAuthGuard)
    findAll() {
        return this.catsService.findAll();
    }

    @Get("search")
    async searchCatByAgeRangeQuery(
        @Query("age_lte") age_lte: number,
        @Query("age_gte") age_gte: number
    ) {
        const cats = await this.catsService.searchCatByAgeRange(age_gte, age_lte)
        return {
            message: "Cats found successfully",
            cats
        }
    }

    @Get(":id")
    async findCatById(
        @Param("id", ParseIntPipe) id: number
    ) {
        const cat = await this.catsService.findSingleCat(id)
        return {
            message: "Cat found successfully",
            cat
        }
    }

    @Put(":id")
    async updateCat(
        @Param("id", ParseIntPipe) id: number,
        @Body(new JoiValidationPipes(updateCatSchema)) updateCatDto: UpdateCatDTO
    ) {
        console.log(updateCatDto)
        const cat = await this.catsService.updateCat(id, updateCatDto)
        return {
            message: "Cat updated successfully",
            cat
        }
    }

    @Delete(":id")
    async deleteCat(
        @Param("id", ParseIntPipe) id: number
    ) {
        await this.catsService.deleteCat(id)
        return {
            message: "Cat deleted successfully"
        }
    }


    @Post()
    async createCat(
        @Body(new JoiValidationPipes(createCatSchema)) createCatDto: CreateCatDTO
    ) {
        const createCat = await this.catsService.createCat(createCatDto)
        return {
            message: "Cat created successfully",
            id: createCat.id
        }
    }
}
