import classes from "./watch.module.scss";

const Watch: React.FC<{ time: number | undefined }> = (props) => {
    const { time = 0 } = props;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const timeAsArray = `${
        String(minutes).padStart(2, '0') + String(seconds).padStart(2, '0')
    }`;
    const [md, mu, sd, su] = timeAsArray;   

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
