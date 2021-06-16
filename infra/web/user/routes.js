const {upload} = require('../../utils');
class UserRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/users",
                actions:[upload.any(),controller.insert]
            }
        ]
    }
}

module.exports = new UserRoutes();