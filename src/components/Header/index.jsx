import styles from './Header.module.css'
import {getLogoUrl} from '../../utils/mainConst.jsx'
import { Link } from 'react-router-dom';

const navNavigation = [
    { path: '/', name: 'Home' },
    { path: 'home/voleyball', name: 'Volleyball Game' },
    { path: 'home/carusel', name: 'Carousel' },
    { path: 'home/taimer', name: 'Timer' },
];

const Header = () => {
    return(
        <div className={styles.header}>
        <h1 style={{paddingTop : 20}}>My amazing HW</h1>
        <div className={styles.navigator_conteiner}>
            <div className={styles.logo}>
                    <img src={getLogoUrl()} alt="#" />
            </div>
            <nav>
                <ul className={styles.list}>
                <ul className={styles.list}>
                    {navNavigation.map((item, index) => <li key={index} className={styles.list__item}>
                        <Link to={item.path} className={styles.list__item_href}>
                            {item.name}
                        </Link>
                    </li>)}
                </ul>
                </ul>
            </nav> 
        </div>
        </div>
    )
}

export default Header;