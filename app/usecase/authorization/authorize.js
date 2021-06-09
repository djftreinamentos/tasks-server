class AuthorizationUseCase{
    constructor({tokenService}){
        this.tokenService = tokenService;
        this.execute = this.execute.bind(this);
    }

    async execute(context){
        const {token} = context;
        let user  = null;
        try{
           user = await this.tokenService.verifyToken(token)
        }catch(err){
            return null;
        }
        const presenter = {
            user,
        }
        return presenter;

    }
}

module.exports = AuthorizationUseCase;