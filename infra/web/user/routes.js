const {upload} = require('../../utils');
class UserRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/users",
                actions:[upload.any(),controller.insert]
            },
            {
                method:"get",
                path:"/users",
                actions:[controller.findAll]
            }
        ]
    }
}

module.exports = new UserRoutes();