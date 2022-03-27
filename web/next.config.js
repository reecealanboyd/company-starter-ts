/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: path.resolve('./node_modules/react')
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, 'node_modules'),
      ],
      symlinks: false,
    }

    config.module.rules.push({
      test: /\.+(js|jsx|ts|tsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')]
    })
    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
