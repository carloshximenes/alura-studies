import moment from "moment";

class TaskModel {
    id: string;
    name: string;
    time: number;
    selected: boolean;
    completed: boolean;

    constructor(name: string, time: string) {
        this.id = name + new Date().toISOString();
        this.name = name;
        this.time = moment.duration(time).asSeconds();
        this.selected = false;
        this.completed = false;
    }
}

export default TaskModel;
