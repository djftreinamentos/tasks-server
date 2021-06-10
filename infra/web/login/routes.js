class LoginRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/authenticate",
                actions:[controller.authenticate]
            },
            {
                method:"get",
                path:"/menu",
                actions:[controller.loadMenus]
            }
        ]
    }
}

module.exports = new LoginRoutes();