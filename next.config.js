module.exports = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    turbopack: {},
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {and: [/\.(js|ts)x?$/]},
            use: ['@svgr/webpack'],
        });
        return config;
    }
}
