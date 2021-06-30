class RemoveRolesUseCase{
    constructor({permissionService, rolesService}){
        this.permissionService = permissionService;
        this.rolesService = rolesService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id);
        const result = await this.rolesService.remove(id)
        return result;
    }
}

module.exports = RemoveRolesUseCase;