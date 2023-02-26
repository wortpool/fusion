import styles from './style.module.css';

const Costomisation = () => {
    return ( 
        <section className={styles.costomisation}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.title}>Интересная кастомизация</div>
                    <div className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab sed dolorum cum eveniet esse ut minus maiores ex ullam reiciendis!</div>
                </div>
            </div>
        </section>
     );
}
 
export default Costomisation;