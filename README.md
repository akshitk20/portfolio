# Akshit Khatri - Portfolio

Personal portfolio website built with React + Vite.

**Live Site**: https://akshitk20.github.io/portfolio

## Tech Stack

- React 19
- Vite 8
- Formspree (contact form)
- GitHub Pages (hosting)
- GitHub Actions (CI/CD)

## Run Locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions.

### How it works

1. **Push to `main` branch** triggers the workflow
2. **GitHub Actions** (`.github/workflows/deploy.yml`):
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies (`npm ci`)
   - Builds the project (`npm run build`)
   - Deploys the `dist` folder to `gh-pages` branch
3. **GitHub Pages** serves the `gh-pages` branch at the live URL

### Workflow file

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Manual Deploy (optional)

```bash
npm run deploy
```

## Contact Form

Contact form submissions are handled via Formspree.

- **Form Dashboard**: https://formspree.io/forms/mkopqjpq/submissions
- **Form Endpoint**: https://formspree.io/f/mkopqjpq

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with resume download
│   ├── Hero.jsx        # Photo, name, stats
│   ├── About.jsx       # Bio
│   ├── Experience.jsx  # Work history with company logos
│   ├── Projects.jsx    # Featured projects
│   ├── Skills.jsx      # Tech stack
│   ├── Education.jsx   # BIT Mesra + certifications
│   └── Contact.jsx     # Email form + social links
├── App.jsx
└── main.jsx
public/
├── photo.jpg           # Profile photo
├── resume.pdf          # Downloadable resume
├── favicon.svg         # Custom favicon
└── logos/              # Company & college logos
```
