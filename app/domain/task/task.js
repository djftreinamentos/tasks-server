class Task{
    constructor({id,title,description,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.user = user;
        this.type = type;
        this.history = history || [];
        this.status = status;  //   [NEW, INPROGRESS, STOPED, FINISHED] 
        this.duration = duration;
        this.predictedTime = predictedTime; 
        this.createdAt = createdAt;
        this.deliveryForecast = deliveryForecast;
        this.deliveredAt = deliveredAt;
    }
}

module.exports = Task;