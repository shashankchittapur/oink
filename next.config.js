/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'upload.wikimedia.org']
    }
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);

module.exports = withNextIntl({
    nextConfig
});
