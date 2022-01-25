const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (config, context) => {
    return {
        ...config,
        module: {
            ...config.module
        },
        plugins: [
            ...config.plugins,
            new ModuleFederationPlugin({
                name: 'reactcontent',
                filename: 'remoteEntry.js',
                exposes: {
                    './Main': './src/main',
                },
                shared: {
                    "react": {
                        singleton: true,
                        strictVersion: true,
                        eager: true,
                        requiredVersion: "17.0.2"
                    },
                    "react-dom": {
                        singleton: true,
                        strictVersion: true,
                        eager: true,
                        requiredVersion: "17.0.2"
                    },
                    "react-router-dom": {
                        singleton: true,
                        strictVersion: true,
                        eager: true,
                        requiredVersion: "5.3.0"
                    }
                }
            }),
        ],
    }
};