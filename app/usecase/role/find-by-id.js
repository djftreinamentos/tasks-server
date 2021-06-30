class FindByIdRolesUseCase{
    constructor({permissionService, rolesService}){
        this.permissionService = permissionService;
        this.rolesService = rolesService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id)
        let roles = await this.rolesService.findById(id);
        return roles;
    }
}

module.exports = FindByIdRolesUseCase;