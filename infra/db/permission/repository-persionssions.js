let records = [
    {id:1,type:"MENU",target:1,role:"ADMIN"},
    {id:2,type:"MENU",target:2,role:"ADMIN"},
    {id:3,type:"MENU",target:3,role:"ADMIN"},
    {id:5,type:"MENU",target:2,role:"USER"},
    {id:6,type:"MENU",target:3,role:"USER"},  
    {id:7,type:"ACTION",target:"USER_FIND_ALL",role:"ADMIN"},    
    {id:8,type:"ACTION",target:"USER_FIND",role:"USER"} ,   
    {id:10,type:"ENDPOINT",target:"USER_INSERT",role:"USER"} ,   
    {id:9,type:"ACTION",target:"USER_UPDATE",role:"USER"} ,   
    {id:10,type:"ENDPOINT",target:"USER_DELETE",role:"USER"}    
    ];
let NEXTID = 10;
class PermissionRepository{
    constructor(){
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.findByTypeAndRoles = this.findByTypeAndRoles.bind(this);
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
    async findByTypeAndRoles(type,roles){
        const result = records
        .filter(currentRecord => {
            const hasType = currentRecord.type === type
            let hasRoles = roles.includes(currentRecord.role);
            return hasType && hasRoles;
        })
        .reduce((acumulator,currentRecord)=>{
            let contains = acumulator.find(item => item.target === currentRecord.target) != null;
            if(!contains){
                acumulator.push(currentRecord)
            }
            return acumulator;

        },[]);
        return Promise.resolve(result);
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

module.exports = new PermissionRepository();