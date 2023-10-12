import { useEffect, useState } from "react";
import styles from "./Timer.module.css"

const Taimer = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [miliSeconds, setMiliSeconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [savedTimes, setSavedTimes] = useState([]);

    const timerState = () => setTimerActive(!timerActive);;

    useEffect(() => {
        let miliSecondsInterval;
        let secondsInterval;
        let minutesInterval;

        if (timerActive) {
            miliSecondsInterval = setInterval(() => {
                setMiliSeconds((prevMiliSeconds) => {
                    if (prevMiliSeconds === 99) {
                        return 0;
                    } else {
                        return prevMiliSeconds + 1;
                    }
                });
            }, 10);
            secondsInterval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 59) {
                        return 0;
                    } else {
                        return prevSeconds + 1;
                    }
                });
            }, 1000);
            minutesInterval = setInterval(() => {
                setMinutes((prevMinutes) => {
                    if (prevMinutes === 59) {
                        return 0;
                    } else {
                        return prevMinutes + 1;
                    }
                });
            }, 60000);
        } else {
            clearInterval(miliSecondsInterval);
            clearInterval(secondsInterval);
            clearInterval(minutesInterval);
        }

        return () => {
            clearInterval(miliSecondsInterval);
            clearInterval(secondsInterval);
            clearInterval(minutesInterval);
        };
    }, [timerActive]);

    const stopTimer = () => {
        setTimerActive(false);
        setSavedTimes((prevSavedTimes) => [...prevSavedTimes, `${minutes}.${seconds}.${miliSeconds}`]);
    };

    const resetTimer = () => {
        setTimerActive(false);
        setMiliSeconds(0);
        setSeconds(0);
        setMinutes(0);
        setSavedTimes([]);
    };


    return(
        <div className={styles.timer_container}>  
            <div className={styles.timer}>
                <p>Current time: {minutes}.{seconds}.{miliSeconds}</p>
            </div>
            <div className={styles.time_point}>
                <p>Time point:</p>
                <ul>
                    {savedTimes.map((time, index) => (
                        <li key={index}>{time} секунд</li>
                    ))}
                </ul>
            </div>
            <div className={styles.button_contanier}>
                <button onClick={timerState}>START</button>
                <button onClick={stopTimer}>STOP</button>
                <button onClick={resetTimer}>RESET</button>
            </div>
        </div>
    )
};

export default Taimer;