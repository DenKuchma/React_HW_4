import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footer_conteiner}>
            <p>&copy; 2023 Мой сайт</p>
            <p>Адрес: 123 улица, Город</p>
        </div>
    )
}

export default Footer;