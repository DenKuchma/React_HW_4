import React from 'react'
import {
    Outlet, Route, Routes,
} from "react-router-dom";
import Carusel from '../../screens/carusel';
import Home from '../../screens/home';
import Voleyball from '../../screens/voleyball';
import Taimer from '../Taimer_game';
import styles from "./MainContent.module.css"

const MainContent = () => {
    return (
        <div className={styles.main_content}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home/voleyball" element={<Voleyball />} />
                <Route path="home/carusel" element={<Carusel />} />
                <Route path="home/taimer" element={<Taimer />} />
            </Routes>
        </div>
    )
}

export default MainContent