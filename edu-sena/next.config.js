/** @type {import('next').NextConfig} */
const nextConfig = {
 
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
