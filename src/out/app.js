define('component/a', [], function () {
    return {
        a: function () {
            console.log('aaaaaaaaaaaaa');
        }
    };
});
define('component/d', [
    'require',
    'exports',
    'module',
    'component/a'
], function (require) {
    return {
        d: function () {
            var a = require('component/a');
            a.a();
        }
    };
});
define('component/b', [
    'require',
    'exports',
    'module'
], function (require) {
    return {
        b: function () {
            console.log('BBBBBBBBBBB');
        }
    };
});
define('component/ab', [
    'require',
    'exports',
    'module',
    'component/d',
    'component/b'
], function (require) {
    return {
        a: function () {
            var d = require('component/d');
            d.d();
            console.log('ab.a()');
        },
        b: function () {
            var b = require('component/b');
            b.b();
            console.log('ab.b()');
        }
    };
});
requirejs.config({
    paths: {
        'jquery': 'lib/jquery',
        'domReady': 'lib/domReady'
    },
    shim: {
        'laydate': {
            deps: [],
            exports: 'laydate'
        }
    }
});
require(['component/ab'], function (ab) {
    ab.b();
});
define('src/js/app', ['component/ab'], function () {
    return;
});