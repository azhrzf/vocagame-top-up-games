# Front End Developer Technical Test - VocaGame

## Description

Create a website for top-up games with a point-of
-sale system. The application allows users to select games, choose top-up amounts, and process payments. The project utilizes state management with Zustand, a UI library like Ant Design, form validation with React Hook Form, and the Next.js App Router.

## Features

- **State Management**: Using Zustand for efficient state management.
- **UI Library**: Utilizing Ant Design for a consistent and responsive UI.
- **Form Validation**: Implementing form validation with React Hook Form.
- **Next.js App Router**: Leveraging Next.js App Router for routing.

## URLs

1. **Home**: `/`
2. **Product Page**: `/product/[id]` - Path obtained through the link on the home page.
3. **Confirmation Pages**:
   - `/payment/pending/[id]`
   - `/payment/success/[id]` - Obtained after completing the purchase of items on the product page.
4. **Invoice Page**: `/invoice/[id]` - Invoice page for products that have been purchased.
5. **Track Order Page**: `/track-order` - Invoice collection page that is searched based on the user's phone number.

## Loading Effects

- **Shimmer Effect**: Used on the product and payment pages to indicate component loading.
- **Confirmation Button**: Includes a 3-second loading animation.
- **Pending Payment Page**: Transitions to Pending Payment Success after 5 seconds.

## State Persistence

- **Local Storage**: State management with Zustand ensures data persistence using local storage.

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

## Deployment

The project has been deployed and can be accessed at: [https://top-up-games-mu.vercel.app/](https://top-up-games-mu.vercel.app/)

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Zustand**: State management library.
- **Ant Design**: UI library for React.
- **React Hook Form**: Library for form validation.
- **Vercel**: Platform for deployment.

## Project Structure

```
.
├── components
│   ├── feature
│   ├── layout
│   ├── ...
├── pages
│   ├── api
│   ├── product
│   │   └── [id].tsx
│   ├── payment
│   │   ├── pending
│   │   │   └── [id].tsx
│   │   └── success
│   │       └── [id].tsx
│   ├── invoice
│   │   └── [id].tsx
│   └── track-order.tsx
├── public
├── styles
├── ...
```
