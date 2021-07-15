const moment = require('moment');
let tasks = [
    {
        id:1,
        title:'Tela de login My-Task',
        description:'Criar a a tela de login para o app My-Task',
        createdAt:moment('2021-06-02').toDate(),
        priority:'HIGH',
        planningType:'PLANNED',
        duration:2,
        predictedTime:2,
        history:[],
        deliveryForecast:moment('2021-06-09').toDate(),
        deliveredAt:moment('2021-06-09').toDate(),
        status:'FINISHED',
        user:{
            id:1,
            name:'João'
        },
        type:"Desenvolvimento"
    },
    {
        id:2,
        title:'Tela do menu principal',
        description:'Criar a a tela do menu principal para o app My-Task, o menu deve mostrar as opções disponíveis de acordo com o perfil do usuário',
        createdAt:moment('2021-06-02').toDate(),
        duration:2,
        predictedTime:2,
        priority:'MEDIUM',
        planningType:'NOT_PLANNED',
        history:[{
            createdAt:moment('2021-06-09').toDate(),
            user:{id:1, name:"João"},
            description:"Menu principal finalizado de acordo com as especificações"
        }],
        deliveryForecast:moment('2021-06-09').toDate(),
        deliveredAt:moment('2021-06-09').toDate(),
        status:'FINISHED',
        user:{
            id:1,
            name:'João'
        },
        type:"Desenvolvimento"
    }
];
let NEXTID = 10;
class TaskRepository{
    constructor(repository){
        this.repository = repository;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async findAll(){
        return Promise.resolve(tasks);
    }
    async findById(id){
        const task = tasks.find(task => task.id === id);
        return Promise.resolve(task);
    }
    async insert(task){
        task.id = NEXTID++;
        tasks.push(task);
        return Promise.resolve(task);
    }
    async update(task){
        let ok = false;
        tasks = tasks.map(element =>{
            if(element.id === task.id){
                ok = true;
                return task;
            }
            return element;
        })
        return Promise.resolve(ok)
    }
    async remove(id){
        let total = tasks.length;
        tasks = tasks.filter(task => task.id != id);
        return Promise.resolve(total > tasks.length);
    }
}

module.exports = new TaskRepository();