class UpdateUserUseCase{
    constructor({permissionService, userService,tokenService}){
        this.permissionService = permissionService;
        this.userService = userService;
        this.tokenService = tokenService;
        this.execute = this.execute.bind(this);
        this.createUser = this.createUser.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id);
        const oldUser = await this.userService.findById(id)
        if(!oldUser){
            return false;
        }
        let user = await this.createUser({...context, oldPassword:oldUser.password});
         const result = await this.userService.update(user);
        return {ok:result};
    }
    async createUser({id,name,email,password,roles,oldPassword}){
        if (password != oldPassword){
            password = await this.tokenService.generateHash(password);
        }
        id = parseInt(id);
        return {
            id,
            name,
            email,
            password,
            roles
        }

    }
}

module.exports = UpdateUserUseCase;