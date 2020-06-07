module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    loaders: ['sass-loader'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { typescript: true }]],
            },
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        });
        return config;
    },
};