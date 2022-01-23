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
                name: 'react_content',
                filename: 'remoteEntry.js',
                exposes: {
                    './react-content': 'apps/react-content/src/main',
                },
                shared: {
                    react: {
                        singleton: true,
                        strictVersion: true,
                        eager: true
                    },
                    "react-dom": {
                        singleton: true,
                        strictVersion: true,
                        eager: true
                    }
                }
            }),
        ]
    }
};