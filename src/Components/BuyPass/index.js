import { useState } from "react";
import Info from "../UI/Info";
import styles from "./style.module.css"

const BuyPass = () => {
    const [username, setUsername] = useState('')    
    const [email, setEmail] = useState('')
    const [validationLogin, setValidationLogin] = useState(false)
    const [validationEmail, setValidationEmail] = useState(false);

    function submit(){
        if(username && email){
            // axios.post('http://localhost:5111/api/authorization',{
            //     username: username,
            //     password: password
            // }).then(response => {
            //     // response = response.data;В
            //     console.log('\nresponce: ', response);
    
            //     if(response.msg === 'error'){
            //         console.log('Ошибка авторизации')
            //     }else{
            //         dispatch(addingData(response))
            //         dispatch(isLoginFunc(true))
            //         navigateToHome('/home')
            //         console.log('ok');
            //     }
            // }).catch( (err) => {
            //     console.log('\nerr: ', err);
            // })
        }else{
            username ? setValidationLogin(false) : setValidationLogin(true)
            email ? setValidationEmail(false) : setValidationEmail(true)
        }
    }

    return ( 
        <section className={styles.login}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.autorization}>
                        <div className={styles.pass__title}>Покупка <br/> <span>проходки</span></div>
                        <div className="">
                            <label htmlFor="username" className={styles.label}>Логин</label>
                            <input type="text" id='username' className={validationLogin ? styles.input + ' ' + styles.active : styles.input} placeholder='login...' onChange={e => setUsername(e.currentTarget.value)}/>
                        </div>
                        <div className="">
                            <label htmlFor="email" className={styles.label}>Почта</label>
                            <input type="email" id='email' className={validationEmail ? styles.input + ' ' + styles.active : styles.input} placeholder='Email...' onChange={e => setEmail(e.currentTarget.value)}/>
                        </div>
                        <div className="" style={{textAlign: 'center'}}>
                            <button className={styles.login__button} onClick={submit}>Вход</button>
                        </div>  
                    </div>
                    <Info />
                </div>
            </div>
        </section>
    );
}
 
export default BuyPass;