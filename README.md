## Dev server
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

This project is based on [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Updating Content
The content is in sections, found in `src/data/*.mdx` files. Each of these is imported and wrapped in `src/app/sections.js` and then imported and arranged in `src/app/page.js`.

Because they are `.mdx` files, they can import and use React components.

## Custom Components
Custom components are found in `src/components` and include:

### Fig
Markup for an image, using the Next.js `Image` Component and adding text as figcaption with two styling options.

### Columns
Simple wrapper that lays out children as columns. It's fairly stupid and just uses flexbox so does not constrain column size or count. Mostly used to put 2 fig side by side. 

### Video Player
Wraps `ReactPlayer`, mostly to embed vimeo.