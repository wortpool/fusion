import { Link } from 'react-router-dom';
import styles from './style.module.css';
import man from './image.png';
import light from './light.png';
import IP from '../../UI/IP';
import Typed from 'react-typed'

const Description = () => {
    return ( 
        <section className={styles.description}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.info}>
                        <div className={styles.title}>Приватный <br /> Vanila<span className={styles.span}>++</span> сервер <br /> <Typed strings={['Сервер твоих желаний', 'Без модов', '']} typeSpeed={50} backSpeed={30} loop styles={{color: '#fff'}}/>.</div>
                        <div className={styles.text}>Cервер, который изменит твое мнение о приватных серверах Minecraft</div>
                        <div className={styles.buttons}>
                            <Link to="" className={styles.play__button}>Хочу играть!</Link>
                            <IP />
                        </div>
                    </div>
                    <div className="image">
                        <img src={man} alt="" />
                    </div>
                </div>
            </div>
            { window.innerWidth >= 768 && <img src={light} alt="" className={styles.light} />}
        </section>
     );
}
 
export default Description;