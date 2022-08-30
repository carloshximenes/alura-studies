import classes from "./button.module.scss";

const Button: React.FC<{
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
}> = (props) => {
    return (
        <button
            className={classes.button}
            type={props.type ? props.type : "button"}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;
