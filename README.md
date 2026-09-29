# Prathamesh1230.github.io Portfolio

A production-ready, no-build personal portfolio website for GitHub Pages.

## Tech Stack

- Semantic HTML (`index.html`)
- Modern CSS (`styles.css`)
- Vanilla JavaScript (`script.js`)

No bundler or build step is required.

## File Structure

- `index.html` - Page content, metadata, and section structure
- `styles.css` - Theme, layout, responsive behavior, and accessibility-focused styling
- `script.js` - Mobile menu interaction and footer year rendering
- `CNAME` - Optional custom domain configuration

## Customize Content

Edit `index.html` and replace all clearly marked placeholders:

1. **Identity & intro**
   - Update the hero title/subtitle copy.
   - Update `<title>`, meta description, Open Graph, and Twitter metadata.

2. **About section**
   - Replace the editable summary and stat-card text with your real details.

3. **Skills**
   - Update skill categories and tags to reflect your stack.

4. **Projects**
   - Replace placeholder project names, descriptions, tech tags, and links.
   - Update demo links and source links from `https://example.com` and profile placeholders.

5. **Experience & Education**
   - Replace timeline placeholder entries with real roles, education, and dates.

6. **Contact**
   - Replace `your-email@example.com`.
   - Replace LinkedIn/X placeholders with your actual profiles.

## Enable Contact Form Submission

The current form is intentionally non-functional (safe fallback).

To make it work, connect it to one of:
- Formspree
- Netlify Forms
- EmailJS
- Your own backend endpoint

Then update the `<form>` attributes and JS as needed.

## Customize Theme Colors

Update color tokens in `styles.css` under `:root`:

- `--bg`, `--bg-soft`
- `--text`, `--muted`
- `--accent`, `--accent-2`
- `--border`

## GitHub Pages Deployment

This repository is a GitHub Pages **user site** (`Prathamesh1230.github.io`).

1. Commit changes to the `main` branch.
2. In GitHub: **Settings → Pages**.
3. Ensure source is set to **Deploy from a branch** and branch is `main` (root).
4. Visit `https://prathamesh1230.github.io/` after deployment completes.

## Local Preview

Open `index.html` directly in your browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
