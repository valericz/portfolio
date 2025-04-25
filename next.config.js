/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Uncomment and modify basePath when deploying to GitHub Pages
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
}

module.exports = nextConfig 