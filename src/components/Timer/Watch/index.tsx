import moment from "moment";
import classes from "./watch.module.scss";

const Watch: React.FC<{ time: number | undefined }> = (props) => {
    const { time = 0 } = props;

    const duration = moment.duration({ seconds: time });
    const timeResult =
        String(Math.floor(duration.asMinutes())).padStart(2, "0") +
        String(duration.seconds()).padStart(2, "0");

    const [md, mu, sd, su] = timeResult;

    return (
        <>
            <span className={classes.number}>{md}</span>
            <span className={classes.number}>{mu}</span>
            <span className={classes.separator}>:</span>
            <span className={classes.number}>{sd}</span>
            <span className={classes.number}>{su}</span>
        </>
    );
};

export default Watch;
