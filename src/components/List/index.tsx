import TaskModel from "../../models/TaskModel";
import Item from "./Item";
import classes from "./list.module.scss";

const List: React.FC<{
    title: string;
    tasks: TaskModel[];
    onSelectItem: (task: TaskModel) => void;
}> = (props) => {
    const { title, tasks, onSelectItem } = props;   

    return (
        <aside className={classes.taskList}>
            <h2>{title}</h2>
            <ul>
                {tasks.length > 0 &&
                    tasks.map((task: TaskModel) => (
                        <Item
                            key={task.id}
                            data={task}
                            onClick={onSelectItem.bind(null, task)}
                        />
                    ))}
            </ul>
        </aside>
    );
};

export default List;
