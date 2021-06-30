const FindAllRolesUseCase = require('../../../app/usecase/role/find-all');
const FindByIdRolesUseCase = require('../../../app/usecase/role/find-by-id');
const CreateRolesUseCase = require('../../../app/usecase/role/create');
const UpdateRolesUseCase = require('../../../app/usecase/role/update');
const RemoveRolesUseCase = require('../../../app/usecase/role/remove');
class RolesController {
    constructor(permissionService, rolesService) {
        this.permissionService = permissionService;
         this.rolesService = rolesService;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async insert(req, res, next) {
        const { currentUser} = req;
        const {name} = req.body;
        const useCase = new CreateRolesUseCase({ permissionService: this.permissionService, rolesService: this.rolesService });
        const result = await useCase.execute({currentUser,name});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(412);
        }
        
    }
    async update(req, res, next) {
    
        const { currentUser} = req;
        const {id} = req.params;
        const {name,} = req.body;
        const useCase = new UpdateRolesUseCase({ permissionService: this.permissionService, rolesService: this.rolesService });
        const result = await useCase.execute({currentUser,id,name});
        if (result) {
            res.sendStatus(204)
        } else {
            res.sendStatus(412);
        }
        
    }

    async remove(req, res, next) {
    
        const { currentUser} = req;
        const {id} = req.params;
        const useCase = new RemoveRolesUseCase({ permissionService: this.permissionService, rolesService: this.rolesService});
        const result = await useCase.execute({currentUser,id});
        if (result) {
            res.sendStatus(204)
        } else {
            res.sendStatus(412);
        }
        
    }

    async findAll(req,res,next){
        const { currentUser} = req;
        const useCase = new FindAllRolesUseCase({ permissionService: this.permissionService, rolesService: this.rolesService });
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
        const useCase = new FindByIdRolesUseCase({ permissionService: this.permissionService, rolesService: this.rolesService });
        const result = await useCase.execute({currentUser,id});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(404);
        }
    }
   
    
}

function build(permissionService, rolesService) {
    return new RolesController(permissionService,rolesService);
}

module.exports = {
    build
}