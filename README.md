<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c5689a24-4a3e-478d-a26e-c91add15c734

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` or `master` branch. Include the `.github/workflows/deploy.yml` workflow.
2. In the repository, open **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**.
3. Push a commit to `main` or `master`, or manually run **Deploy to GitHub Pages** from the repository's **Actions** tab.
4. After the workflow completes, find the published address under **Settings > Pages**. For a regular project repository, it is `https://<username>.github.io/<repository>/`.

The Vite build automatically sets the repository base path for project sites. Local development continues to use `/`.
