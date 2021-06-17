const FindAllUsersUseCase = require('../../../app/usecase/user/find-all');
class UserController {
    constructor(permissionService, userService) {
        this.permissionService = permissionService;
         this.userService = userService;
        this.findAll = this.findAll.bind(this);
        this.insert = this.insert.bind(this);
    }

    async insert(req, res, next) {
    
        console.log(req);
        console.log(JSON.stringify(req.files[0].filename));
        console.log(req.body)
        res.sendStatus(200);
        
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
   
    
}

function build(permissionService, userService) {
    return new UserController(permissionService,userService);
}

module.exports = {
    build
}