import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";


@Injectable()
export class ProductsService {
    private products: Product[] = [];

    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) { }

    async insertProduct(title: string, desc: string, price: number) {
        const newProduct = new this.productModel({
            title,
            desc,
            price
        });
        const result = await newProduct.save()
        return result.id as string
    }

    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map((prod) => (
            {
                id: prod.id,
                title: prod.title,
                desc: prod.desc,
                price: prod.price
            }
        )) as Array<Product>
    }

    async getSingleProduct(productId: string) {
        const product = await this.findProduct(productId);
        return {
            id: product.id,
            title: product.title,
            desc: product.desc,
            price: product.price
        };
    }

    async updateProduct(productId: string, title: string, desc: string, price: number) {
        const updatedProduct = await this.findProduct(productId)
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.desc = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        updatedProduct.save();
    }

    async deleteProduct(prodId: string) {
        await this.productModel.deleteOne({ id: prodId }).exec();
    }



    private async findProduct(id: string): Promise<Product> {
        let product;
        try {
            product = await this.productModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Data Not Found");
        }

        if (!product) {
            throw new NotFoundException("Data Not Found");
        }

        return product;
    }


}