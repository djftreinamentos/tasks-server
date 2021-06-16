const LoadMenuUseCase = require('../../../app/usecase/menu/load-menus');
class MenuController {
    constructor(permissionService, menuSevice) {
        this.permissionService = permissionService;
        this.menuService = menuSevice;
        this.loadMenus = this.loadMenus.bind(this);
    }

    async loadMenus(req, res, next) {
        const { currentUser} = req;
        const useCase = new LoadMenuUseCase({ permissionService: this.permissionService, menuService: this.menuService });
        const result = await useCase.execute({ roles:currentUser.roles });
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(404);
        }
    }
    
}

function build(permissionService, menuSevice) {
    return new MenuController(permissionService, menuSevice);
}

module.exports = {
    build
}