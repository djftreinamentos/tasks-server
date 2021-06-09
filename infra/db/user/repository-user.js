let users = [{
    id:1,
    name:"João da Silva",
    email:"joao@teste.com",
    password:"$2b$15$g6VxU4.QJSRTe3dhV2K0POel7ymg9.7Jve.h7jdg3tKNMK627tsX.",
    roles:["ADMIN"]
}];
let NEXTID = 10;
class UserRepository{
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
        return Promise.resolve(users);
    }
    async findById(id){
        const user = users.find(user => user.id === id);
        return Promise.resolve(user);
    }
    async findByEmail(email){
        const user = users.find(user => user.email === email);
        return Promise.resolve(user);
    }
    async insert(user){
        user.id = NEXTID++;
        users.push(user);
        return Promise.resolve(user);
    }
    async update(user){
        let ok = false;
        users = users.map(element =>{
            if(element.id === user.id){
                ok = true;
                return user;
            }
            return element;
        })
        return Promise.resolve(ok)
    }
    async remove(id){
        let total = users.length;
        users = users.filter(user => user.id != id);
        return Promise.resolve(total > users.length);
    }
}

module.exports = new UserRepository();