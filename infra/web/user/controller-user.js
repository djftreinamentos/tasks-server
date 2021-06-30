const FindAllUsersUseCase = require('../../../app/usecase/user/find-all');
const FindByIdUsersUseCase = require('../../../app/usecase/user/find-by-id');
const CreateUsersUseCase = require('../../../app/usecase/user/create');
const UpdateUsersUseCase = require('../../../app/usecase/user/update');
const RemoveUsersUseCase = require('../../../app/usecase/user/remove');
class UserController {
    constructor(permissionService, userService,tokenService) {
        this.permissionService = permissionService;
         this.userService = userService;
         this.tokenService = tokenService
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async insert(req, res, next) {
    
        const { currentUser} = req;
        const {name,email,password,roles} = req.body;
        const useCase = new CreateUsersUseCase({ permissionService: this.permissionService, userService: this.userService,tokenService:this.tokenService });
        const result = await useCase.execute({currentUser,name,email,password,roles});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(412);
        }
        
    }
    async update(req, res, next) {
    
        const { currentUser} = req;
        const {id} = req.params;
        const {name,email,password,roles} = req.body;
        const useCase = new UpdateUsersUseCase({ permissionService: this.permissionService, userService: this.userService,tokenService:this.tokenService });
        const result = await useCase.execute({currentUser,id,name,email,password,roles});
        if (result) {
            res.sendStatus(204)
        } else {
            res.sendStatus(412);
        }
        
    }

    async remove(req, res, next) {
    
        const { currentUser} = req;
        const {id} = req.params;
        const useCase = new RemoveUsersUseCase({ permissionService: this.permissionService, userService: this.userService});
        const result = await useCase.execute({currentUser,id});
        if (result) {
            res.sendStatus(204)
        } else {
            res.sendStatus(412);
        }
        
    }

    async findAll(req,res,next){
        const { currentUser} = req;
        const useCase = new FindAllUsersUseCase({ permissionService: this.permissionService, userService: this.userService });
        const result = await useCase.execute();
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(404);
        }
    }
    async findById(req,res,next){
        const { currentUser} = req;
        const {id} = req.params;
        const useCase = new FindByIdUsersUseCase({ permissionService: this.permissionService, userService: this.userService });
        const result = await useCase.execute({currentUser,id});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(404);
        }
    }
   
    
}

function build(permissionService, userService, tokenService) {
    return new UserController(permissionService,userService,tokenService);
}

module.exports = {
    build
}