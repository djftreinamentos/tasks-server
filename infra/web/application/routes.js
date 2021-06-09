class AppRoutes{
    
    build(controller){
        return [
            {
                method:"use",
                path:null,
                actions:[controller.authorize]
            }
        ]
    }
}

module.exports = new AppRoutes();