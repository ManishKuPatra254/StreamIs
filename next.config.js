/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
            {
                protocol: 'https',
                hostname: "codervent.com",
            },
            {
                protocol: 'https',
                hostname: "wallpapercave.com",
            },
            {
                protocol: 'https',
                hostname: "themoviedb.org",
            },
        ],
    },
}

module.exports = nextConfig
