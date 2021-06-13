module.exports = {
    stories: ['../../ui-kit/src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        'storybook-addon-i18n',
        'storybook-addon-styled-component-theme'
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
                ['@babel/transform-react-jsx', { loose: true }],
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose : true }],
                ['@babel/proposal-object-rest-spread', { loose: true }]
             ],
            presets: [
                ['@babel/preset-react', { flow: false, typescript: true, loose: true}],
                ['@babel/preset-typescript', { loose: true }],
                ['@babel/preset-env', { loose: true }]
            ],
          },
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
