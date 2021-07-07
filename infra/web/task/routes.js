class TaskRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/tasks",
                actions:[controller.insert]
            },
            {
                method:"get",
                path:"/tasks",
                actions:[controller.findAll]
            },
            {
                method:"get",
                path:"/tasks/:id",
                actions:[controller.findById]
            },
            {
                method:"put",
                path:"/tasks/:id",
                actions:[controller.update]
            },
            {
                method:"delete",
                path:"/tasks/:id",
                actions:[controller.remove]
            }
        ]
    }
}

module.exports = new TaskRoutes();