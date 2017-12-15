/**
 * Created by chenzikun on 2017/6/23.
 */

const gulp = require('gulp');
const browserSync = require('browser-sync').create()
const nodemon = require('gulp-nodemon')

// 代理
gulp.task('dev', function () {
    nodemon({
        script: 'app.js',
        ignore: ["gulpfile.js", "node_modules/"], // 忽略部分对程序运行无影响的文件的改动，nodemon只监视js文件
        env: {'NODE_ENV': 'development'}
    }).on('start', function () {
        browserSync.init({
            proxy: 'http://localhost:5200',
            files: [
                "./static/css/**/*.*",
                "./static/js/**/*.*",
                "./static/images/**/*.*",
                "./templates/**/*.*",
                "./data/*.*",
            ],
            port: 5020
        }, function () {
            console.log("browser refreshed.");
        });
    });
});

gulp.task('server', function () {
    nodemon({
        script: 'app.js',
        ignore: ["gulpfile.js", "node_modules/"], // 忽略部分对程序运行无影响的文件的改动，nodemon只监视js文件
        env: {'NODE_ENV': 'test'}
    });
})
