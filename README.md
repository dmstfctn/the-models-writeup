## Setup / Install
```bash
npm install
```

## Dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is based on [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Updating Content
The content is in sections, found in `src/data/*.mdx` files. Each of these is imported and wrapped in `src/app/sections.js` and then imported and arranged in `src/app/page.js`.

Because they are `.mdx` files, they can import and use React components.

## Custom Components
Custom components are found in `src/components` and include:

### AnchorLink
Allows linking to an `#id` somewhere on the page.

### Sidebar
Contains additional contextual information (arbitrary HTML / elements) and offers `<SidebarLink>` to toggle this from the content. Makes use of `SidebarContext.js` for global control. 

Don't add sidebar links inside content that will appear in the sidebar or it gets weird.

### Fig
Markup for an image, using the Next.js `Image` Component and adding text as figcaption with two styling options.

### Columns
Simple wrapper that lays out children as columns. It's fairly stupid and just uses flexbox so does not constrain column size or count. Mostly used to put 2 fig side by side. 

### Video Player
Wraps `ReactPlayer`, mostly to embed vimeo.

### Audio Player
Wraps the `<audio>` element to play mp3s.



### AnchorLink

## Images, audio files
These are directly in the `public` folder and referenced from the `.mdx` files.