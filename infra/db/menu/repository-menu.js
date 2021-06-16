let records = [{
    id:1,
    name:"Usuários",
    path:"/admin/users",
    image:"",
},{
    id:2,
    name:"Perfil",
    path:"/admin/profile",
    image:"",
},{
    id:3,
    name:"Tarefas",
    path:"/admin/tasks",
    image:"",
}];
let NEXTID = 10;
class MenuRepository{
    constructor(){
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async findAll(){
        return Promise.resolve(records);
    }
    async findById(id){
        const record = records.find(currentRecord => currentRecord.id === id);
        return Promise.resolve(record);
    }
    
    async insert(record){
        record.id = NEXTID++;
        records.push(record);
        return Promise.resolve(record);
    }
    async update(record){
        let ok = false;
        records = records.map(element =>{
            if(element.id === record.id){
                ok = true;
                return record;
            }
            return element;
        })
        return Promise.resolve(ok)
    }
    async remove(id){
        let total = records.length;
        records = records.filter(record => record.id != id);
        return Promise.resolve(total > records.length);
    }
}

module.exports = new MenuRepository();