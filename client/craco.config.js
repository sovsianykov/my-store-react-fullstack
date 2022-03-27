const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Components': path.resolve(__dirname, 'src/components'),
            '@cart': path.resolve(__dirname, 'src/App/Cart'),
            '@products': path.resolve(__dirname, 'src/App/Products'),
            '@home': path.resolve(__dirname, 'src/App/Home'),

        },



    },
};