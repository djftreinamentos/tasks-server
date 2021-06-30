class UpdateRolesUseCase{
    constructor({permissionService, rolesService}){
        this.permissionService = permissionService;
        this.rolesService = rolesService;
        this.execute = this.execute.bind(this);
        this.create = this.create.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id);
        const oldRoles = await this.rolesService.findById(id)
        if(!oldRoles){
            return false;
        }

        let roles = await this.create(context);
         result = await this.rolesService.update(roles);
        return result;
    }
    async create({id,name,}){
        return {
            id,
            name,
        }

    }
}

module.exports = UpdateRolesUseCase;