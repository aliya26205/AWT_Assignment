
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 45000,
        inStock: true,
        tags: ["Electronics"]
    },
    {
        id: 2,
        name: "Mouse",
        price: 800,
        inStock: true,
        tags: ["Accessories"]
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1500,
        inStock: false
    },
    {
        id: 4,
        name: "Monitor",
        price: 12000,
        inStock: true,
        tags: ["Electronics"]
    }
];

function getAvailableProducts(
    products: Product[]
): Product[] {
    return products.filter(product => product.inStock);
}

interface DiscountedProduct extends Product {
    discountPercent: number;
}

function applyDiscountToProducts(
    products: Product[]
): DiscountedProduct[] {
    const discountPercent: number = 10;

    return products.map(product => ({
        ...product,
        price: product.price * (1 - discountPercent / 100),
        discountPercent
    }));
}

console.log(getAvailableProducts(products));
console.log(applyDiscountToProducts(products));
