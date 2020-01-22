module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production/' : '/',

    outputDir: 'dist',

    assetsDir: '',

    indexPath: 'index.html',

    productionSourceMap: false,

    devServer: {
        proxy: ''
    }
}