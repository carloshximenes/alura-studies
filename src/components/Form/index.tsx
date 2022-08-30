import { useRef } from "react";
import InputModel from "../../models/InputModel";
import TaskModel from "../../models/TaskModel";
import Button from "../Button";
import Input from "../UI/Input";
import classes from "./form.module.scss";

const Form: React.FC<{ onSubmit: (form: TaskModel) => void }> = (props) => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputTimeRef = useRef<HTMLInputElement>(null);

    const formInputs: InputModel[] = [
        {
            id: "task",
            label: "Adicione um novo estudo",
            placeholder: "Adicione um novo estudo",
            required: true,
            type: "text",
            ref: inputNameRef,
        },
        {
            id: "time",
            label: "Tempo",
            required: true,
            type: "time",
            ref: inputTimeRef,
            min: "00:00:00",
            max: "01:30:00",
            step: "1",
        },
    ];

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputNameValue = inputNameRef.current!.value;
        const inputTimeValue = inputTimeRef.current!.value;

        let newTask = new TaskModel(inputNameValue, inputTimeValue);
        props.onSubmit(newTask);
    };

    return (
        <form className={classes.newTask} onSubmit={submitHandler}>
            {formInputs.length > 0 &&
                formInputs.map((i: InputModel) => <Input key={i.id} {...i} />)}
            <Button text="Adicionar" type="submit" />
        </form>
    );
};

export default Form;
