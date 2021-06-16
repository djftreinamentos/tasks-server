class MenuRoutes{
    
    build(controller){
        return [
            {
                method:"get",
                path:"/menus",
                actions:[controller.loadMenus]
            }
        ]
    }
}

module.exports = new MenuRoutes();