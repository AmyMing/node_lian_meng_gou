'use strict';

let Router = require('koa-router');
let router = new Router();
let authRouter = new Router({prefix:'admin'});

let Controllers = require('./controllers/')
router.get('/',function* () {
    this.body = 'hi world';
});

authRouter.use(function*(){
    let username = this.session.username;
    if(username){
        this.body = '欢迎'+username;
    }
    else{
        this.body = '请登录';
    }
})

authRouter.get('/test',function*(){
    this.body += 'hello ,world';
});

router.get('/user',Controllers.User.test);

exports.router = router;
exports.authRouter = authRouter;
