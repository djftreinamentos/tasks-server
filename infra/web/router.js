const beforeAll = [...require('../web/application').routes,]
const routes = [...require('../web/login').routes,]
const afterAll = []

class Router{

    config(app){
        beforeAll.forEach(route =>{
            if(route.path){
                app[route.method](route.path,route.actions);
            }else{
                app[route.method](route.actions);
            }
        })
        routes.forEach(route =>{
        app[route.method](route.path,route.actions);
        })
        afterAll.forEach(route =>{
            app.use(route.middleware)
        })
    }
}

module.exports = new Router();