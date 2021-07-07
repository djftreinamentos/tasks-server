class FindByIdTaskUseCase{
    constructor({permissionService, taskService}){
        this.permissionService = permissionService;
        this.taskService = taskService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id)
        let task = await this.taskService.findById(id);
        return task;
    }
}

module.exports = FindByIdTaskUseCase;