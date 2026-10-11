# Leading Edge Finishings (Astro)

Static marketing site built with Astro, Tailwind CSS 4, and Lucide Astro icons. This is a standalone sibling project; the React/TanStack project remains in `leading-edge-finishings/`.

## Commands

Run these from this folder:

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the Astro dev server at `http://localhost:4321` |
| `pnpm check` | Run Astro and TypeScript diagnostics |
| `pnpm build` | Generate the static site in `dist/` |
| `pnpm preview` | Preview the production build locally |

## Site Structure

- `src/pages/` contains the home, about, contact, services, and projects routes. Service and project detail pages are generated from the data modules.
- `src/data/` is the source of business, service, and project content.
- `src/components/` contains shared Astro UI and the two small browser scripts for the menu, project filters, and quote form.
- `public/img/` holds source photography, served directly as static files.

Upload the generated `dist/` directory to a static web host. Quote requests open a pre-addressed email draft. No React or TanStack runtime is used in this project.
