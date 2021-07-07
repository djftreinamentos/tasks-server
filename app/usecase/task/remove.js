class RemoveTaskUseCase{
    constructor({permissionService, taskService}){
        this.permissionService = permissionService;
        this.taskService = taskService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id);
        const result = await this.taskService.remove(id)
        return result;
    }
}

module.exports = RemoveTaskUseCase;