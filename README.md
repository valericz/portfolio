# Portfolio

A personal portfolio website built with Next.js.

## GitHub Pages Deployment Instructions

### Step 1: Enable GitHub Pages in your repository

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions" as the build and deployment source

### Step 2: Update your repository

1. Push this code to GitHub
2. The GitHub Actions workflow will automatically build and deploy your site

### Step 3: Configure for your username

If you want to deploy to your user page (username.github.io):

1. Create a repository named exactly: `username.github.io`
2. Update next.config.js to remove the basePath and assetPrefix comments
3. Push your code to the main branch

If you're deploying to a project page (username.github.io/repository-name):

1. Uncomment and update the basePath and assetPrefix in next.config.js to match your repository name:
   ```js
   basePath: '/repository-name',
   assetPrefix: '/repository-name',
   ```
2. Push your code to the main branch

### Step 4: Access your deployed site

After the GitHub Actions workflow completes:
- User page: https://username.github.io
- Project page: https://username.github.io/repository-name

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
