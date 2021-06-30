class RolesRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/roles",
                actions:[controller.insert]
            },
            {
                method:"get",
                path:"/roles",
                actions:[controller.findAll]
            },
            {
                method:"get",
                path:"/roles/:id",
                actions:[controller.findById]
            },
            {
                method:"put",
                path:"/roles/:id",
                actions:[controller.update]
            },
            {
                method:"delete",
                path:"/roles/:id",
                actions:[controller.remove]
            }
        ]
    }
}

module.exports = new RolesRoutes();