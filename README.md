# Type augmentation bug in @nuxtjs/strapi type augmentation

`@nuxtjs/strapi` seems to be overriding the things injected by all other plugins. This is a minimal reproduction of that.

## Steps

Make sure to install the dependencies:

```bash
pnpm install
```

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

Open `app.vue` to see the TypeScript errors.

Then comment out the module in `nuxt.config.ts` and check that `app.vue` is now free of TypeScript errors.
