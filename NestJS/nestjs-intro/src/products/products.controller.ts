import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller("products")
export class ProductsController {

    constructor(public readonly productsService: ProductsService) { }

    @Post()
    async addProducts(
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const generatedId = await this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedId }
    }


    @Get()
    async getAllProducts() {
        const product = await this.productsService.getProducts();
        return product;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(":id")
    async updateProduct(
        @Param("id") prodId: string,
        @Body("title") prodTitle: string,
        @Body("desc") prodDesc: string,
        @Body("price") prodPrice: number
    ) {
        await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.productsService.deleteProduct(prodId);
        return null;
    }

}
