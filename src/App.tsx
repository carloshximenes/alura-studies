import { useCallback, useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Timer from "./components/Timer";
import Layout from "./components/UI/Layout";
import TaskModel from "./models/TaskModel";

const DUMMY_TASKS: TaskModel[] = [
    new TaskModel("React", "01:30:00"),
    new TaskModel("Javascript", "01:00:00"),
    new TaskModel("Typescript", "01:25:45"),
    new TaskModel("Teste", "00:00:01"),
];

function App() {
    const [tasks, setTasks] = useState(DUMMY_TASKS);

    useEffect(() => {}, [tasks]);

    const addTaskHandler = (newTask: TaskModel) => {
        setTasks((prev) => {
            return prev.concat(newTask);
        });
    };

    const selectTaskHandler = (task: TaskModel) => {
        setTasks((prev) => {
            return prev.map((item) => {
                item.selected = item.id === task.id && !item.completed;
                return item;
            });
        });
    };

    const timerButtonClickHandler = useCallback(
        (timeRemain: number | undefined) => {
            if (typeof timeRemain === "number") {
                setTasks((prev) => {
                    return prev.map((item) => {
                        item.time = item.selected ? timeRemain : item.time;
                        if (item.time === 0) {
                            item.completed = true;
                            item.selected = false;
                        }
                        return item;
                    });
                });
            }
        },
        []
    );

    return (
        <Layout>
            <Form onSubmit={addTaskHandler} />
            <Timer
                timeRemain={tasks.find((t) => t.selected)?.time}
                onStop={timerButtonClickHandler}
            />
            <List
                title="Estudos do dia"
                tasks={tasks}
                onSelectItem={selectTaskHandler}
            />
        </Layout>
    );
}

export default App;
