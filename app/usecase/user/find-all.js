class FindAllUserUseCase{
    constructor({permissionService, userService}){
        this.permissionService = permissionService;
        this.userService = userService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        let users = await this.userService.findAll();
        return users;
    }
}

module.exports = FindAllUserUseCase;