/*
 * @Author: chenzikun 
 * @Date: 2017-12-16 00:37:14 
 * @Last Modified by:   陈子坤 
 * @Last Modified time: 2017-12-16 00:37:14 
 */
const nunjucks = require('nunjucks')
const express = require('express')
const path = require('path')

const base_dir = path.join(__dirname, '.')
const _templates = path.join(base_dir, 'templates/')
const _static = path.join(base_dir, 'static/')


let create_app = function (name, templates_file, static_file) {
    let templates = arguments[1] ? arguments[1] : _templates
    let statics = arguments[2] ? arguments[2] : _static

    let app = express()

    /*static*/
    app.use(express.static(statics))

    /*templates*/
    let env = nunjucks.configure(templates, {
        autoescape: true,
        express: app,
        watch: true,
        noCache: true
    });

    /*让url_for编译过去*/
    env.addGlobal('url_for', function () {
        return 'javascript:void()'
    });

    return app
};

module.exports = {create_app: create_app}
