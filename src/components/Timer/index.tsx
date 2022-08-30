import { useEffect, useState } from "react";
import Button from "../Button";

import classes from "./timer.module.scss";
import Watch from "./Watch";

const Timer: React.FC<{
    timeRemain: number | undefined;
    onStop: (timeRemain: number | undefined) => void;
}> = (props) => {
    const { timeRemain = 0, onStop } = props;
    const [time, setTime] = useState<number>();
    const [startCounting, setStartCounting] = useState<boolean>(false);

    useEffect(() => {
        setTime(timeRemain);
        setStartCounting(false);
    }, [timeRemain, onStop]);

    useEffect(() => {
        let timer: NodeJS.Timer | number;
        if (startCounting) {
            if (time === 0) {
                onStop(time);
                setStartCounting(false);
            } else {
                timer =
                    (time &&
                        time > 0 &&
                        setInterval(
                            () =>
                                setTime((prev) => {
                                    return prev ? prev - 1 : 0;
                                }),
                            1000
                        )) ||
                    0;
            }
        } else {
            onStop(time);
        }
        return () => clearInterval(timer);
    }, [time, startCounting, onStop]);

    const startTaskHandler = () => {
        setStartCounting((prev) => {
            return !prev;
        });
    };

    const textMessage = startCounting ? "Pausar!" : "Começar!";

    return (
        <div className={classes.timer}>
            <p className={classes.title}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={classes.watchWraper}>
                <Watch time={time} />
            </div>
            <Button text={textMessage} onClick={startTaskHandler} />
        </div>
    );
};

export default Timer;
