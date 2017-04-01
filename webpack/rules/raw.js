module.exports = ({ limit = 10000 } = {}) => ({
    test: /\.md$/,
    loader: 'raw-loader'
});

