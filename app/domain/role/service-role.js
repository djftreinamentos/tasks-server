class RoleService{
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
    async insert(user){
        return await this.repository.insert(user);
    }
    async update(user){
        return await this.repository.update(user);
    }
    async remove(user){
        return await this.repository.remove(user);
    }
}

module.exports = RoleService;