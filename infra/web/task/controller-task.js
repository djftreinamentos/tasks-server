const FindAllTaskUseCase = require('../../../app/usecase/task/find-all');
const FindByIdTaskUseCase = require('../../../app/usecase/task/find-by-id');
const CreateTaskUseCase = require('../../../app/usecase/task/create');
const UpdateTaskUseCase = require('../../../app/usecase/task/update');
const RemoveTaskUseCase = require('../../../app/usecase/task/remove');
class TaskController {
    constructor(permissionService, taskService) {
        this.permissionService = permissionService;
         this.taskService = taskService;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async insert(req, res, next) {
    
        const { currentUser} = req;
        const {title,description,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type} = req.body;
        const useCase = new CreateTaskUseCase({ permissionService: this.permissionService, taskService: this.taskService});
        const result = await useCase.execute({title,description,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(412);
        }
        
    }
    async update(req, res, next) {
    
        const { currentUser} = req;
        const {id} = req.params;
        const {title,description,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type} = req.body;
        const useCase = new UpdateTaskUseCase({ permissionService: this.permissionService, taskService: this.taskService });
        const result = await useCase.execute({currentUser,id,title,description,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(412);
        }
        
    }

    async remove(req, res, next) {
    
        const { currentUser} = req;
        const {id} = req.params;
        const useCase = new RemoveTaskUseCase({ permissionService: this.permissionService, taskService: this.taskService});
        const result = await useCase.execute({id});
        if (result) {
            res.sendStatus(204)
        } else {
            res.sendStatus(412);
        }
        
    }

    async findAll(req,res,next){
        const { currentUser} = req;
        const useCase = new FindAllTaskUseCase({ permissionService: this.permissionService, taskService: this.taskService });
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
        const useCase = new FindByIdTaskUseCase({ permissionService: this.permissionService, taskService: this.taskService });
        const result = await useCase.execute({id});
        if (result) {
            res.json(result)
        } else {
            res.sendStatus(404);
        }
    }
   
    
}

function build(permissionService, taskService) {
    return new TaskController(permissionService,taskService);
}

module.exports = {
    build
}