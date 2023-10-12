import MainContent from '../MainContent';
import Sidebar_page from '../Sidebar_page';
import styles from './Body.module.css';



const Body = () => {

    return (
        <div className={styles.main}>
            <Sidebar_page />
            <MainContent />
        </div>
    );
};

export default Body;