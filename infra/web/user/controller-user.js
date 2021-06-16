// const LoadMenuUseCase = require('../../../app/usecase/menu/load-menus');
class UserController {
    constructor() {
        // this.permissionService = permissionService;
        // this.menuService = menuSevice;
        this.insert = this.insert.bind(this);
    }

    async insert(req, res, next) {
    
        console.log(req);
        console.log(JSON.stringify(req.files[0].filename));
        console.log(req.body)
        res.sendStatus(200);
        
    }
   
    
}

function build(permissionService, menuSevice) {
    return new UserController();
}

module.exports = {
    build
}