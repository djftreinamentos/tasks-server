class TaskService{
    constructor(repository){
        this.repository = repository;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async findAll(){
        return await this.repository.findAll();
    }

    async findById(id){
        return await this.repository.findById(id);
    }

    async insert(task){
        return await this.repository.insert(task);
    }
    
    async update(task){
        return await this.repository.update(task);
    }
    
    async remove(id){
        return await this.repository.remove(id);
    }
}

module.exports = TaskService;