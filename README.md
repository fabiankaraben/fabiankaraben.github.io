# Fabián Karaben - Personal Portfolio & Blog

This is the official personal portfolio and technology blog for **Fabián Karaben**, a Full Stack Developer. The site features a premium, responsive design, full localization (English & Spanish), a tech blog, showcase areas for major projects, and a secure interactive contact form.

The project is built as a static site using Next.js (statically exported) and is deployed automatically via GitHub Actions to **GitHub Pages**.

---

## 🛠️ Tech Stack & Key Features

* **Core Framework:** [Next.js](https://nextjs.org/) (App Router, static output export)
* **Language:** [TypeScript](https://www.typescript.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Package Manager:** `pnpm`
* **Localization (i18n):** Native support for English and Spanish languages.
* **Integrations:** Contact form connected to a secure, external API endpoint hosted on `https://xeost.com`.

---

## 🚀 Local Development

To run the portfolio site locally, follow these steps:

### 1. Prerequisites

Ensure you have Node.js (version 20 or higher) and `pnpm` installed:

```bash
# Verify pnpm installation
pnpm --version
```

### 2. Set Up Environment Variables

Copy the environment variables template and configure the API key:

```bash
cp .env.example .env.local
```

Open `.env.local` and set the `NEXT_PUBLIC_PORTFOLIO_CONTACT_API_KEY` to your local token or production token.

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run Development Server

```bash
pnpm dev
```

The application will start running at [http://localhost:3001](http://localhost:3001) (or the port specified in `package.json`).

---

## 🌐 GitHub Pages Deployment & API Key Configuration

Since this website is hosted statically on **GitHub Pages**, it does not run server-side code. The contact form connects directly from the browser to an external server endpoint (`https://xeost.com/api/portfolio-contact`).

To secure this request, Next.js bakes the `NEXT_PUBLIC_PORTFOLIO_CONTACT_API_KEY` into the client-side bundle **at build time**.

### Step-by-Step Setup

1. **Add Repository Secret:**
   * Go to your GitHub repository.
   * Click on **Settings** -> **Secrets and variables** -> **Actions**.
   * Select **New repository secret**.
   * Set **Name** to: `PORTFOLIO_CONTACT_API_KEY`
   * Set **Value** to your secret API key.

2. **Automated Integration (GitHub Actions):**
   The deployment workflow defined in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) is already configured to automatically inject the secret during compilation:

   ```yaml
         - name: Build with Next.js
           env:
             NEXT_PUBLIC_PORTFOLIO_CONTACT_API_KEY: ${{ secrets.PORTFOLIO_CONTACT_API_KEY }}
           run: pnpm build
   ```

3. **CORS Security:**
   The backend API at `https://xeost.com` strictly validates the request origin, only accepting submissions from `https://fabiankaraben.github.io` (production) and designated `localhost` origins (local development).

---

## 🗂️ Project Structure

* `/src/app/` - Application routes, layouts, and page templates.
* `/src/components/` - Reusable UI components (header, footer, cards, contact form).
* `/src/lib/` - Auxiliary utility scripts, MD loaders, and translation dictionaries.
* `/data/` - Content for resumes, biographies, and profiles.
* `/public/` - Static assets, images, and documents.
