/*
 * @Author: chenzikun 
 * @Date: 2017-12-16 00:37:43 
 * @Last Modified by:   陈子坤 
 * @Last Modified time: 2017-12-16 00:37:43 
 */

const application = require("./application")
const fs = require("fs")
const yaml = require("js-yaml")


/*data*/
const data = yaml.load(fs.readFileSync('./data/user.yaml', 'utf-8'))

const app = application.create_app('app')
const admin = application.create_app('admin')


/*子路由*/
app.use("/admin", admin)

admin.get('/', function (req, res) {
    res.send("hello admin!")
});

/*模板渲染 index索引页*/
app.get('/', function (req, res) {
    res.render('index.html', {
        data: data.index
    });
});

app.get('/agency', function (req, res) {
    res.render('practice/agency.html', {
        data: data.agency
    });
});

app.get('/homepage', function (req, res) {
    res.render('homepage.html', {
        data: data.index
    });
});

app.get('/demo', function (req, res) {
    res.render('demo.html', {
        data: data.index
    });
});

app.get('/animation', function (req, res) {
    res.render('demo.html', {
        data: data.index
    });
});

let thisTemplatePort = 5200

/*启动服务*/
app.listen(thisTemplatePort)

/*使用browser-sync代理*/
console.info('监听成功，请在浏览器访问 http://localhost:', 5200)