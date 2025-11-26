# Blood Lagbe

Blood Lagbe is a web application designed to connect blood donors with people in need of blood. Users can register, log in, manage their profile, post requests, and search for donors by blood group.

Live: https://bloodlagbe-drab.vercel.app
Backend: https://github.com/BrainlessDip/bloodlagbeServer

---

## Features

- User authentication (login & registration)
- Blood donor search by blood group
- User profiles with detailed information
- Post creation and management

---

## Route Summary

| Route               | Method | Description                   |
| ------------------- | ------ | ----------------------------- |
| `/login`            | GET    | Login page and authentication |
| `/register`         | GET    | User registration             |
| `/bloods`           | GET    | List and search blood donors  |
| `/posts`            | GET    | View and create posts         |
| `/profile/[userId]` | GET    | View user profile by ID       |

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Configure environment variables:

Create a `.env` file in the root directory and add required variables, for example:

```env
DATABASE_URL=<your-database-url>
NEXT_PUBLIC_API_URL=<your-api-url>
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
