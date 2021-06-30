class CreateRolesUseCase{
    constructor({permissionService, rolesService}){
        this.permissionService = permissionService;
        this.rolesService = rolesService;
        this.execute = this.execute.bind(this);
        this.create = this.create.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        let role = this.create(context);
         user = await this.rolesService.insert(role);
        return user;
    }
     create({name}){
        return {
            name,
        }

    }
}

module.exports = CreateRolesUseCase;