import moment from "moment";
import React from "react";
import TaskModel from "../../../models/TaskModel";
import classes from "./item.module.scss";

const Item: React.FC<{ data: TaskModel; onClick: () => void }> = (props) => {
    const startTime = "00:00:00";
    const duration = moment.duration({ seconds: props.data.time });
    const time = moment(startTime, "HH:mm:ss").add(duration).format("HH:mm:ss");

    const getClasses = () => {
        let c = [classes.item];
        props.data.selected && c.push(classes.selected);
        props.data.completed && c.push(classes.completed);
        return c.join(" ");
    };

    return (
        <li
            key={props.data.id}
            className={getClasses()}
            onClick={!props.data.completed ? props.onClick : () => {}}
        >
            <h3>{props.data.name}</h3>
            <span>{time}</span>
            {props.data.completed && (
                <span className={classes.done} aria-label="task done"></span>
            )}
        </li>
    );
};

export default Item;
