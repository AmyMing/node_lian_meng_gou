'use strict';


const koa = require("koa");
const config = require('./config');
const route = require('./router');
const session = require('koa-session');
const views = require('koa-render');
const jade = require('jade');

let app =koa();
app.keys = config.sessionKey;
app.use(session(app));
app.use(views('./public','jade'));

app.use(route.Router.routes());
app.use(route.authRouter.routes());

app.listen(config.port);