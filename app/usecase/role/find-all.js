class FindAllRolesUseCase{
    constructor({permissionService, rolesService}){
        this.permissionService = permissionService;
        this.rolesService = rolesService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        let roles = await this.rolesService.findAll();
        return roles;
    }
}

module.exports = FindAllRolesUseCase;