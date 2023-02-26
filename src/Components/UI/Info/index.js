import styles from './style.module.css';
import image from './img.png'
import IP from '../IP';

const Info = () => {
    return ( 
        <div className={styles.info}>
            <div>
                <div className={styles.text__title}>Приватный Vanila<span>++</span> сервер Без модов.</div>
                <div className={styles.text__description}>Cервер, который изменит твое мнение о приватных серверах Minecraft</div>
                <IP />
                <a href="https://google.com" className={styles.discord}>Discord сервер</a>
            </div>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
        </div>
     );
}

export default Info;