import styles from './style.module.css';
import firstImage from './images/1.png';
import secondImage from './images/2.png';

const FpsBooster = () => {
    return ( 
        <section className={styles.fps__section}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.background}>
                        <div className={styles.background__small}></div>
                        <div className={styles.background__big}></div>
                        <div className={styles.background__small}></div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.block}>
                            <div className={styles.text} style={window.innerWidth >= '1120' ? {marginRight: '48px', textAlign: 'right'} : {marginRight: '0', textAlign: 'center'}}>
                                <div className={styles.title}>Новая уникальная генерация</div>
                                <div className={styles.description}>Поможет вам почувствовать себя в новом и неизведанном мире</div>
                            </div>
                            <div className={styles.image}>
                                <img src={firstImage} alt="" />
                                <div className={styles.fps}><span>120</span> FPS</div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.image}>
                                <img src={secondImage} alt="" />
                                <div className={styles.second__fps}><span>45</span> FPS</div>
                            </div>
                            <div className={styles.text} style={window.innerWidth >= '1120' ? {marginLeft: '48px'} : {marginLeft: '0', textAlign: 'centerblock'}}>
                                <div className={`${styles.title} ${styles.sec__title}`}>С новой генерацией у вас больше FPS!</div>
                                <div className={styles.second__description}>Теперь вы можете комфортно проводить своё время на сервере без лагов.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default FpsBooster;