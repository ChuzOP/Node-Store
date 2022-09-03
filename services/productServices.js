const faker = require('faker');

class ProductsService {
    constructor() {
        this.products = [];

        this.generate(); // Iniciamos nuestros servicios de usuarios
    }

    generate() {
        const limit = 10;

        // Push de productos
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                nombre: faker.commerce.productName(),
                precio: parseInt(faker.commerce.price(), 10), // Numero en base 10
                descripcion: faker.lorem.sentence(),
                imagen: faker.image.imageUrl(),
            });
        }
    }

    // Funciones para los servicios
    create() {}

    find() {
        // Devolvemos los datos
        return this.products;
    }

    findOne(id) {
        // Devolvemos el elemento con el id que nos mandan
        return this.products.find((item) => item.id == id);
    }

    update(id, changes) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes,
        };
        return this.products[index];
    }

    delete(id) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductsService;
