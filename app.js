'use strict';


let koa = require("koa");
let config = require('./config');
let route = require('./router');
let app =koa();
app.use(route.router.routes());
app.use(route.authRouter.routes());

app.listen(config.port);