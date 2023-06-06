/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    }))
    return config
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig
