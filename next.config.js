/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
          {
            protocol: 'https',
            hostname: 'gardener-plants.storage.yandexcloud.net',
            port: '',
            pathname: '/avatars/**',
          }
        ],
      },
}
// background-image: url("https://lh3.googleusercontent.com/a/AAcHTtdG6Fic5JGOEBfwdmbqaFHo8HRj2W3oh2MjxkboeAJ4L9E=s96-c");
module.exports = nextConfig
