class FindByIdUserUseCase{
    constructor({permissionService, userService}){
        this.permissionService = permissionService;
        this.userService = userService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id)
        let user = await this.userService.findById(id);
        return user;
    }
}

module.exports = FindByIdUserUseCase;