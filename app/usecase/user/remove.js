class RemoveUserUseCase{
    constructor({permissionService, userService}){
        this.permissionService = permissionService;
        this.userService = userService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id);
        const result = await this.userService.remove(id)
        return result;
    }
}

module.exports = RemoveUserUseCase;