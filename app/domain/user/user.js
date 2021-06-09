class User{
    constructor({id,name,email,password, roles}){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.roles = roles || [];
    }
}

module.exports = User;