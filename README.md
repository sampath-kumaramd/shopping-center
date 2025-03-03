# Shopping Center

A modern e-commerce platform built with Next.js, offering a seamless shopping experience with curated discounts and deals.

## About the Project

Shopping Center (Eu Amo Desconto) is a comprehensive destination for consumers seeking the best deals, coupons, and discounts across various products and services. The platform aims to make saving money more accessible and rewarding by providing verified and regularly updated offers.

## Key Features

- **Curated Deals**: Carefully selected offers across electronics, fashion, home decor, travel, food, and more
- **Multiple Marketplace Integration**: Connect with Amazon, Americanas, Mercado Livre, and other popular marketplaces
- **Responsive Design**: Fully optimized for all device sizes
- **Product Filtering**: Filter products by price range, marketplace, and categories
- **Multiple View Options**: Toggle between grid and list views for products
- **Social Media Integration**: Connect via Telegram, WhatsApp, Facebook, and Instagram

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI with shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `/app`: Application routes and pages
- `/components`: Reusable UI components
- `/bin`: Data sources for products, categories, etc.
- `/lib`: Utility functions and type definitions
- `/public`: Static assets like images and icons

## Core Pages

- **Home**: Featured products and deals
- **About Us**: Company mission, vision, and values
- **Contact Us**: Contact form and FAQ section
- **Terms of Use**: Legal terms and conditions
- **Privacy Policy**: Data handling and privacy information

## Design System

The project uses a custom design system with:

- Primary colors: Orange (#d26841) and Yellow (#eacb3d)
- Responsive components built with Radix UI primitives
- Consistent spacing and typography

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [shadcn/ui](https://ui.shadcn.com)

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the platform.
