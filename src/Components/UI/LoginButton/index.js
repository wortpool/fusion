import styles from './style.module.css';

const LoginButton = ({text}) => {
    return ( 
        <button className={styles.button}>{text}</button>
     );
}
 
export default LoginButton;