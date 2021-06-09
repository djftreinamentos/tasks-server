class Permission{
    constructor({id,type,target,role}){
        this.id = id;
        this.type = type;
        this.target = target;
        this.role = role;
    }
}

module.exports = Permission;