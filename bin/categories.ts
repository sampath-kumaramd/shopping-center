export type Category = {
    id: number;
    src: string;
    title: string;
    description: string;
    moreDetails?: string;
};

export const Categories: Category[] = [
    {
        id: 1,
        src: "/icons/categories/laptop.svg",
        title: "Eletrônicos",
        description:"A categoria de Eletrônicos oferece uma variedade de produtos, incluindo smartphones, notebook, tablets, fones de ouvido, smartwatches, câmeras digitais e acessórios tecnológicos. Encontre tudo o que você precisa para estar conectado, entreter-se e manter-se produtivo, com marcas renomadas e os mais recentes lançamentos do mercado. Descubra as melhores promoções.",
        moreDetails:"Descubra as melhores ofertas em eletrônicos e mergulhe no mundo da tecnologia com nossa categoria exclusiva. De smartphones de última geração a dispositivos inteligentes para casa, temos tudo o que você precisa para estar conectado e atualizado. Explore uma ampla variedade de produtos de marcas líderes, incluindo Apple, Samsung, Sony e muito mais, todos com descontos imperdíveis que vão além do que você imaginava."
    },
    {
        id: 2,
        src: "/icons/categories/couch.svg",
        title: "Móveis e Eletrodomésticos",
        description:"description"
    },
    {
        id: 3,
        src: "/icons/categories/sneaker.svg",
        title: "Moda",
        description:"description"
    },
    {
        id: 4,
        src: "/icons/categories/pinwheel.svg",
        title: "Bebês e Crianças",
        description:"description"
    },
    {
        id: 5,
        src: "/icons/categories/first-aid.svg",
        title: "Saúde e Beleza",
        description:"description"
    },
    {
        id: 6,
        src: "/icons/categories/volleyball.svg",
        title: "Esportes e Lazer",
        description:"description"
    },
    {
        id: 7,
        src: "/icons/categories/car.svg",
        title: "Automotivo",
        description:"description"
    },
    {
        id: 8,
        src: "/icons/categories/basket.svg",
        title: "Supermercado",
        description:"description"
    },
];