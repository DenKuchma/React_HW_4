import { Link, Route, Routes } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Sidebar_one from '../../screens/sidebar_one';
import Sidebar_two from '../../screens/sidebar_two';

const navNavigation = [
    { path: 'sidebar/sidebar_one', name: 'News' },
    { path: 'sidebar/sidebar_two', name: 'sidebar_two' },
];

const Sidebar_page = () => {
    return (
        <div className={styles.sidebar}>
                <ul className={styles.list}>
                {navNavigation.map((item, index) => <li key={index} className={styles.list__item}>
                    <Link to={item.path} className={styles.list__item_href}>
                        {item.name}
                    </Link>
                </li>)}
            </ul>
            <Routes>
                <Route path="sidebar/sidebar_one" element={<Sidebar_one />} />
                <Route path="sidebar/sidebar_two" element={<Sidebar_two />} />
            </Routes>
        </div>
    );
}

export default Sidebar_page;
