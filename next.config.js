/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Uncomment and modify basePath when deploying to GitHub Pages
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig 