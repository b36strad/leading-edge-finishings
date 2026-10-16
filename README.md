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
- `src/components/` contains shared Astro UI and the small browser scripts for the menu, project filters, and quote form.
- `public/` holds static assets and `send-inquiry.php`, which Astro copies to `dist/`.

## Contact Form Deployment

The contact form requires a PHP-enabled web host; GitHub Pages cannot run the PHP endpoint. Upload the contents of `dist/` to the host's web root. Keep `private-config/` and `PHPMailer-master/` as sibling directories outside that web root, and set the `SMTP_PASSWORD` environment variable on the host. The PHP endpoint and its private dependencies are intentionally deployed separately.

No React or TanStack runtime is used in this project.
