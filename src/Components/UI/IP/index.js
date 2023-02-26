import styles from './style.module.css';
import image from './image.png'

const IP = () => {
    function copy(){
        navigator.clipboard.writeText('fusionmc.fun')
    }

    return ( 
        // <div className={styles.ip__button}>IP : fusionmc.fun</div>
        <div className={styles.ip__button} onClick={copy} title="Copy IP">
            <div className={styles.title}>IP : fusionmc.fun</div>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
        </div>
     );
}
 
export default IP;