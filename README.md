## How to work?
On the screen, there is a tree. First, the branches are randomly generated with apples on them using **utils/getBranches.js** (random branches is generated from 5 to 11). To collect apples, you need to shake the tree using the *shake button*. After clicking the shake button, apples will randomly drop from the branches using **utils/getRandomDropApples.js**. You can continue shaking the tree until there are no more apples left. And than you can continue to collect apples via *new tree button*. Lastly, you can see the collected apples in your basket.


#
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

