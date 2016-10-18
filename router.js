'use strict';

let router = require('koa-router');
let Router = new router();
let authRouter = new router({prefix:'/admin'});
let Controllers = require('./controllers/')
const session = require('koa-session');

Router.get('/',function* () {
    this.body = 'hi world';
});

authRouter.use(function*(){
    let username = this.session.username;
    if(username){
        this.body = '欢迎'+username;
    }
    else{
        this.redirect('/login');
    }

})

Router.get('/login',function*(){
    this.body = yield this.render('index');
    //this.body = "this is login page";
});


authRouter.get('/test',function*(){
    this.body += 'hello ,world';
});



Router.get('/user',Controllers.User.test);

exports.Router = Router;
exports.authRouter = authRouter;
