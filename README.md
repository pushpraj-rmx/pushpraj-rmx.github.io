# pushpraj-rmx.github.io

Personal portfolio — [pushpraj-rmx.github.io](https://pushpraj-rmx.github.io/)

Built with React 19, Vite 8, TypeScript and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to docs/
npm run preview   # serve the production build locally
```

## Deploying

GitHub Pages serves this site from the **`main` branch, `/docs` folder**.
`docs/` is a build artifact but is committed on purpose — Pages reads it directly.
Run `npm run build` and commit the result to publish.

## Content

Bio, projects and stack live in [`src/data.ts`](./src/data.ts) — edit that file
rather than the components to update the site.
