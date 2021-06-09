class AuthenticateUseCase{
    constructor({tokenService, userService}){
        this.tokenService = tokenService;
        this.userService = userService;
        this.execute = this.execute.bind(this);
    }

    async execute(context){
        const {login,password} = context;
        let user = await this.userService.findByEmail(login);
        if (!user){
            return null;
        }
        const ok = await this.tokenService.verifyHash(user.password,password)
        if (!ok){
            return null;
        }
        
        const data = {
            id:user.id,
            name:user.name,
            email:user.email,
            roles:user.roles
        }

        const token = await this.tokenService.generateToken(data);
        const presenter = {
            token,
            user:{...data}
        }
        return presenter;

    }
}

module.exports = AuthenticateUseCase;