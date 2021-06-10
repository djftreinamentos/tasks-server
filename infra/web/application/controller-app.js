const AuthorizationUseCase = require('../../../app/usecase/authorization/authorize');
class ApplicationController{
    constructor(tokenService){
        this.tokenService = tokenService;
        this.authorize = this.authorize.bind(this);
    }

    async authorize(req,res,next){
        const authorization = req.headers['authorization'] || "";
        const path = req.path;
        const token = authorization.replace(/Bearer /, '');
        if(path != '/authenticate'){
            const useCase = new AuthorizationUseCase({tokenService:this.tokenService});
            const result = await useCase.execute({token});
            if(result){
                req.currentUser = result;
                next()
            }else{
                res.sendStatus(401);
            }
        }else{
            next()
        }
    }
}

function build(tokenService){
    return new ApplicationController(tokenService);
}

module.exports = {
    build
}