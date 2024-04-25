export type Product = {
    id: number;
    categoryId: number;
    tag?: string;
    subTitle: string;
    discription: string;
    image: string;
    title: string;
    originalPrice: number;
    discountPrice: number;
    likes: number;
    addedTime: string;
    comment: Comment[];
};

export type Comment = {
    id: number;
    userName: string;
    userImage: string;
    comment: string;
}

export const Products: Product[] = [
    {
        id: 1,
        categoryId: 1,
        tag: "Destaques",
        subTitle: "A1 Mini fones de ouvido sem fio Bluetooth",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product1.svg",
        title: "Amazon",
        originalPrice: 92.44,
        discountPrice: 76.13,
        likes: 24,
        addedTime: "2 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 2,
        categoryId: 1,
        subTitle: "Fritadeira Elétrica Sem Óleo EOS Chef Gourmet...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product2.svg",
        title: "Casas Bahia",
        originalPrice: 209.00,
        discountPrice: 179.99,
        likes: 76,
        addedTime: "5 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 3,
        categoryId: 1,
        subTitle: "Tênis Nike Precision 6 Masculino",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product3.svg",
        title: "Mercado Livre",
        originalPrice: 319.90,
        discountPrice: 273.19,
        likes: 198,
        addedTime: "32 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 4,
        categoryId: 1,
        tag: "Desconto alto",
        subTitle: "Ketchup Hemmer Tradicional 1kg",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product4.svg",
        title: "Americanas",
        originalPrice: 15.59,
        discountPrice: 12.59,
        likes: 3,
        addedTime: "1 hora",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 5,
        categoryId: 1,
        tag: "Destaques",
        subTitle: "A1 Mini fones de ouvido sem fio Bluetooth",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product1.svg",
        title: "Amazon",
        originalPrice: 92.44,
        discountPrice: 76.13,
        likes: 24,
        addedTime: "2 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 6,
        categoryId: 1,
        subTitle: "Fritadeira Elétrica Sem Óleo ",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product2.svg",
        title: "Casas Bahia",
        originalPrice: 209.00,
        discountPrice: 179.99,
        likes: 76,
        addedTime: "5 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 7,
        categoryId: 1,
        subTitle: "Tênis Nike Precision 6 Masculino",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product3.svg",
        title: "Mercado Livre",
        originalPrice: 319.90,
        discountPrice: 273.19,
        likes: 198,
        addedTime: "32 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 8,
        categoryId: 1,
        tag: "Desconto alto",
        subTitle: "Ketchup Hemmer Tradicional 1kg",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product4.svg",
        title: "Americanas",
        originalPrice: 15.59,
        discountPrice: 12.59,
        likes: 3,
        addedTime: "1 hora",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 9,
        categoryId: 1,
        tag: "Destaques",
        subTitle: "A1 Mini fones de ouvido sem fio Bluetooth",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product1.svg",
        title: "Amazon",
        originalPrice: 92.44,
        discountPrice: 76.13,
        likes: 24,
        addedTime: "2 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 10,
        categoryId: 1,
        subTitle: "Fritadeira Elétrica Sem Óleo EOS Chef Gourmet...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product2.svg",
        title: "Casas Bahia",
        originalPrice: 209.00,
        discountPrice: 179.99,
        likes: 76,
        addedTime: "5 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 1,
        categoryId: 1,
        subTitle: "Tênis Nike Precision 6 Masculino",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product3.svg",
        title: "Mercado Livre",
        originalPrice: 319.90,
        discountPrice: 273.19,
        likes: 198,
        addedTime: "32 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 12,
        categoryId: 1,
        tag: "Desconto alto",
        subTitle: "Ketchup Hemmer Tradicional 1kg",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product4.svg",
        title: "Americanas",
        originalPrice: 15.59,
        discountPrice: 12.59,
        likes: 3,
        addedTime: "1 hora",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 13,
        categoryId: 1,
        tag: "Destaques",
        subTitle: "A1 Mini fones de ouvido sem fio Bluetooth",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product1.svg",
        title: "Amazon",
        originalPrice: 92.44,
        discountPrice: 76.13,
        likes: 24,
        addedTime: "2 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 14,
        categoryId: 1,
        subTitle: "Fritadeira Elétrica Sem Óleo EOS Chef Gourmet...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product2.svg",
        title: "Casas Bahia",
        originalPrice: 209.00,
        discountPrice: 179.99,
        likes: 76,
        addedTime: "5 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 15,
        categoryId: 1,
        subTitle: "Tênis Nike Precision 6 Masculino",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product3.svg",
        title: "Mercado Livre",
        originalPrice: 319.90,
        discountPrice: 273.19,
        likes: 198,
        addedTime: "32 min",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
    {
        id: 16,
        categoryId: 1,
        tag: "Desconto alto",
        subTitle: "Ketchup Hemmer Tradicional 1kg",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        image: "/images/product4.svg",
        title: "Americanas",
        originalPrice: 15.59,
        discountPrice: 12.59,
        likes: 3,
        addedTime: "1 hora",
        comment: [
            {
                id: 1,
                userName: "John Doe",
                userImage: "/images/user1.svg",
                comment: "Great product, highly recommend it!"
            },
            {
                id: 2,
                userName: "Jane Smith",
                userImage: "/images/user2.svg",
                comment: "Fast delivery and good quality."
            }
        ]

    },
];