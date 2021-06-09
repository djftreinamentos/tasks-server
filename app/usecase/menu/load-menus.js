class LoadMenusUseCase{
    constructor({permissionService, menuService}){
        this.permissionService = permissionService;
        this.menuService = menuService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'MENU';
    }

    async execute(context){
        const {roles} = context;
        let menus = await this.menuService.findAll();
        let permissions = await this.permissionService.findByTypeAndRoles(this.permissionType,roles);
        menus = menus.filter(menu =>{
            const hasPermission = permissions.find( permission => permission.target === menu.id) != null;
            return hasPermission;
        }) 
        return menus;

    }
}

module.exports = LoadMenusUseCase;