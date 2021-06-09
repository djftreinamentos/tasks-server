class UserService{
    constructor(repository){
        this.repository = repository;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.findByEmail = this.findByEmail.bind(this);
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
    async findByEmail(email){
        return await this.repository.findByEmail(email);
    }
    async insert(user){
        return await this.repository.insert(user);
    }
    async update(user){
        return await this.repository.update(user);
    }
    async remove(id){
        return await this.repository.remove(id);
    }
}

module.exports = UserService;