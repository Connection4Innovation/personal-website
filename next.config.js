module.exports = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    turbopack: {},
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {and: [/\.(js|ts)x?$/]},
            use: ['@svgr/webpack'],
        });
        
        // Exclude sharp from server bundle for Cloudflare Workers compatibility
        if (isServer) {
            config.externals = config.externals || [];
            config.externals.push('sharp');
        }
        
        return config;
    }
}
