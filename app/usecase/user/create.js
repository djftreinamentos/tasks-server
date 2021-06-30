class CreateUserUseCase{
    constructor({permissionService, userService,tokenService}){
        this.permissionService = permissionService;
        this.userService = userService;
        this.tokenService = tokenService;
        this.execute = this.execute.bind(this);
        this.createUser = this.createUser.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        let user = await this.createUser(context);
         user = await this.userService.insert(user);
        return user;
    }
    async createUser({name,email,password,roles}){
        password = await this.tokenService.generateHash(password);
        return {
            name,
            email,
            password,
            roles
        }

    }
}

module.exports = CreateUserUseCase;