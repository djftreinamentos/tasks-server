class LoginRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/authenticate",
                actions:[controller.authenticate]
            }
        ]
    }
}

module.exports = new LoginRoutes();