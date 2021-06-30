let roles = [{
    id:1,
    name:"ADMIN",
},{
    id:2,
    name:"USER",
}];
let NEXTID = 10;
class RoleRepository{
    constructor(repository){
        this.repository = repository;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async findAll(){
        return Promise.resolve(roles);
    }
    async findById(id){
        const roles = roles.find(role => role.id === id);
        return Promise.resolve(roles);
    }
    async insert(role){
        role.id = NEXTID++;
        roles.push(role);
        return Promise.resolve(role);
    }
    async update(role){
        let ok = false;
        roles = roles.map(element =>{
            if(element.id === role.id){
                ok = true;
                return role;
            }
            return element;
        })
        return Promise.resolve(ok)
    }
    async remove(id){
        let total = roles.length;
        roles = roles.filter(role => role.id != id);
        return Promise.resolve(total > roles.length);
    }
}

module.exports = new RoleRepository();