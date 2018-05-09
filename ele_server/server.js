const koa=require('koa');
const static=require('koa-static');
const Router=require('koa-router');
const db=require('./libs/database');
const config=require('./config');
const pathlib=require('path');

const server=new koa();
server.listen(config.PORT);

server.use(async (ctx,next)=>{
	ctx.user_id='sdfsdfwe4444fferf4488fwefe';

	await next();
});

let router=new Router();
router.use('/api/',require('./routers/api.router'));

server.use(router.routes());

server.use(static(pathlib.resolve(__dirname,'www/')));
