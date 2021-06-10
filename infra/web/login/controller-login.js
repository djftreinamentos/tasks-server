const AuthenticationUseCase = require('../../../app/usecase/login/authenticate');
class LoginController {
    constructor(tokenService, userSevice) {
        this.tokenService = tokenService;
        this.userService = userSevice;
        this.authenticate = this.authenticate.bind(this);
    }

    async authenticate(req, res, next) {
        const { login, password } = req.body;
        const useCase = new AuthenticationUseCase({ tokenService: this.tokenService, userService: this.userService });
        const result = await useCase.execute({ login, password });
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(401);
        }
    }
    async loadMenus(req,res,next){
        res.json([{name:"Gerenciar Usuários",path:"/usuarios"}, {name:"Gerenciar Tarefas",path:"/tarefas"}]);
    }
}

function build(tokenService, userService) {
    return new LoginController(tokenService, userService);
}

module.exports = {
    build
}