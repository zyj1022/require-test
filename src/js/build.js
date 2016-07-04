({
    //应用程序的目录（即<root>）。在这个文件夹下的所有文件将会被复制到dir参数标注的文件夹下。
    appDir: '../js/',
    //相对于appDir，代表查找文件的锚点（that represents the anchor path for finding files）
    baseUrl: './',
    //这是一个输出目录，所有的应用程序文件将会被复制到该文件夹下。
    dir: '../dist',
    //一个包含多个对象的数组。每个对象代表一个将被优化的模块（module）。
    modules: [
        {
            name: 'app'
        }
    ],
    /*
    任何与此规则匹配的文件或文件夹都将不会被复制到输出目录。由于我们把r.js和build.js放置在应用程序目录下，
    我们希望优化器（optimizer）排除这两个文件。 因此我们可以这样设置/^(r|build)\.js$/。
    */
    fileExclusionRegExp: /^(r|build)\.js$/,
    /*
    RequireJS Optimizer会自动优化应用程序下的CSS文件。这个参数控制CSS最优化设置。允许的值： “none”,
    “standard”,“standard.keepLines”, “standard.keepComments”, “standard.keepComments.keepLines”。
    */
    //optimizeCss: 'standard',
    //如果为true，优化器（optimizer）将从输出目录中删除已合并的文件。
    removeCombined: true,
    //模块（modules）的相对目录。
    paths: {
        jquery: 'lib/jquery',
        laydate: 'lib/laydate',
        //underscore: 'lib/underscore',
        //backbone: 'lib/backbone/backbone',
        //backboneLocalstorage: 'lib/backbone/backbone.localStorage',
        text: 'lib/text'
    },
    //为那些没有使用define()声名依赖关系及设置模块值的模块，配置依赖关系与“浏览器全局”出口的脚本。
    shim: {
        laydate: {
            exports: 'laydate'
        }
    }
})
