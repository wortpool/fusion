
import { Link } from 'react-router-dom';
import styles from './style.module.css'

const Buying = () => {
    return ( 
        <section className={styles.buying}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.title}>Вперёд <br/> за приключениями!</div>
                    <div className={styles.button}>
                        <Link>Купить проходку<br />за 89 рублей</Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Buying;