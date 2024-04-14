export type Product = {
    tag?: string;
    description: string;
    image: string;
    title: string;
    originalPrice: number;
    discountPrice: number;
    likes: number;
    addedTime: string;
};

export const Products: Product[] = [
    {
        tag: "Destaques",
        description: "A1 Mini fones de ouvido sem fio Bluetooth",
        image: "/images/product1.svg",
        title: "Amazon",
        originalPrice: 92.44,
        discountPrice: 76.13,
        likes: 24,
        addedTime: "2 min",
    },
    {
        description: "Fritadeira Elétrica Sem Óleo EOS Chef Gourmet...",
        image: "/images/product2.svg",
        title: "Casas Bahia",
        originalPrice: 209.00,
        discountPrice: 179.99,
        likes: 76,
        addedTime: "5 min",
    },
    {
        description: "Tênis Nike Precision 6 Masculino",
        image: "/images/product3.svg",
        title: "Mercado Livre",
        originalPrice: 319.90,
        discountPrice: 273.19,
        likes: 198,
        addedTime: "32 min",
    },
    {
        tag: "Desconto alto",
        description: "Ketchup Hemmer Tradicional 1kg",
        image: "/images/product4.svg",
        title: "Americanas",
        originalPrice: 15.59,
        discountPrice: 12.59,
        likes: 3,
        addedTime: "1 hora",
    },
    {
        tag: "Destaques",
        description: "A1 Mini fones de ouvido sem fio Bluetooth",
        image: "/images/product1.svg",
        title: "Amazon",
        originalPrice: 92.44,
        discountPrice: 76.13,
        likes: 24,
        addedTime: "2 min",
    },
    {
        description: "Fritadeira Elétrica Sem Óleo EOS Chef Gourmet...",
        image: "/images/product2.svg",
        title: "Casas Bahia",
        originalPrice: 209.00,
        discountPrice: 179.99,
        likes: 76,
        addedTime: "5 min",
    },
    {
        description: "Tênis Nike Precision 6 Masculino",
        image: "/images/product3.svg",
        title: "Mercado Livre",
        originalPrice: 319.90,
        discountPrice: 273.19,
        likes: 198,
        addedTime: "32 min",
    },
    {
        tag: "Desconto alto",
        description: "Ketchup Hemmer Tradicional 1kg",
        image: "/images/product4.svg",
        title: "Americanas",
        originalPrice: 15.59,
        discountPrice: 12.59,
        likes: 3,
        addedTime: "1 hora",
    },
];