import React, { useState} from 'react';
import styles from './Volleyball_game.module.css'


const Voleyball_game = () => {
    let firstTeamScore;
    let secondTeamScore;

    const [gameLog, setGameLog] = useState([]); 

    function getResultText(text) {
        setGameLog(prevLog => [...prevLog, text]);
    }

    function getRandomZone() {
        return Math.floor(Math.random() * 4) + 1;
    }

    function gameZonePlay(attackingTeam) {
        let ballZone = getRandomZone();
        let notGuardedZones =  getRandomZone();
        let defendingTeam = (attackingTeam === 1) ? 2 : 1;
        getResultText("Подача");
        getResultText(`Место удара команды №${attackingTeam}: ${ballZone}`);
        getResultText(`Пустая зона команды №${defendingTeam}: ${notGuardedZones}`);

        if (notGuardedZones === ballZone) {
            getResultText(`Очко команде №${attackingTeam} за успешную атаку`);
            return true; 
        } else {
            getResultText(`Команда №${defendingTeam} отбила`);
            return false; 
        }
    }

    function matchPoint(attackingTeam) {
        if (attackingTeam === 1) {
            firstTeamScore++;
        } else {
            secondTeamScore++;
        }
        getResultText(`Очки первой команды: ${firstTeamScore}, Очки второй команды: ${secondTeamScore}`);
    }

    function startGame(){
        const confirmed = window.confirm("Вы уверены, что хотите начать игру?");
        if (!confirmed) {
            return; 
        }

        firstTeamScore = 0;
        secondTeamScore = 0;
        setGameLog([]);
        while (firstTeamScore < 3 && secondTeamScore < 3) {
            let attackingTeam = 1;
            while (true) {
                if (gameZonePlay(attackingTeam)) {
                    matchPoint(attackingTeam);
                    if (firstTeamScore == 3 || secondTeamScore == 3) {
                        getResultText("Последнее очко забито");
                        break;
                    }
                }
                attackingTeam = (attackingTeam === 1) ? 2 : 1;
            }
        }

        if (firstTeamScore > secondTeamScore) {
            getResultText("Команда 1 победила!");
        } else {
            getResultText("Команда 2 победила!");
        }
    }
    return (
        <>
            <button onClick={startGame} className={styles.button_start}>Начать игру</button>
            <div id="textDiv"> 
            {gameLog.map((log, index) => (
                    <p key={index}>{log}</p>
                ))}
            </div>
        </>
    );
};

export default Voleyball_game;