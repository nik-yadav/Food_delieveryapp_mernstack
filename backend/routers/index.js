const cartRouter = require('./cart.router');
const authRouter = require('./user.router');
const foodDataRouter = require('./foodData.router');

const routerCalls = (app) => {
    app.use('/', cartRouter)
    app.use('/', authRouter);
    app.use('/', foodDataRouter);
}

module.exports = {
    routerCalls
};